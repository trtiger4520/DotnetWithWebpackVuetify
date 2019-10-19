<template>
    <div>
        <div id="Map" class="map"></div>
        <button class="btn btn-danger"
                @click="Add">
            {{ Count }}
        </button>
    </div>
</template>
<style lang="scss">
    .map {
        width: 100%;
        height: 500px;
    }    
</style>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators'

import GMapStore from '../store/gmap.store';
import DefaultMapList from '../data/defaultMapList';

const store = getModule(GMapStore);

@Component
export default class Maps extends Vue {
    protected googleMapLink = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxhRPC8zLimKVRXM0wIgrVtZKXXAyGH_Q';
    
    map: google.maps.Map | null = null;
    markerCluster: any;
    states: CarState[] = [];
    centerLocation: LocationData = { lat: 25.0347707, lng: 121.3520598 };
    zoom: number = 10;

    driverDataList: Array<object> = [];

    created() {
        
    }
    mounted() {
        const _this = this;
        _this.GetMapScript();
    }

    get GoogleMapInitOption(): google.maps.MapOptions {
        const { zoom, centerLocation: center } = this;
        return { 
            zoom, center,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
    }

    /** 在body底部新增scripts並設定完成後啟動地圖功能 */
    GetMapScript() {
        const _this = this;
        const _doc = document || window.document || globalThis.document;
        const scriptTag = _doc.createElement('script');
        scriptTag.src = _this.googleMapLink;
        scriptTag.addEventListener('load', _this.GoogleMapScriptOnLoad.bind(_this));
        _doc.body.appendChild(scriptTag);
    }
    /** 設定取得初始化資料ajax地區 */
    async GetMapInitDataAjax() {
        const ajaxResponse: ResponseViewModel<GetMonitorData> = await JSON.parse(JSON.stringify(DefaultMapList));
        return ajaxResponse;
    }

    GoogleMapScriptOnLoad() {
        const el = this.$el.querySelector('#Map');
        if (!el) { return; }
        const { zoom, centerLocation: center } = this;
        this.map = new google.maps.Map(el, this.GoogleMapInitOption);
        this.GetMapInitData();
        this.markerCluster = new MarkerClusterer(this.map, 
            this.states.reduce((markers: google.maps.Marker[], state) => {  
                if (state.Marker) markers.push(state.Marker);
                return markers; 
            }, []), 
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }

    GetMapInitData() {
        const _this = this;
        const data = this.GetMapInitDataAjax();
        data.then(res => {
            if (!res.Success) { console.error('取得車輛資訊失敗') }
            if (!res.Data) {return;}
            _this.states = _this.ConvertCarGroupsToCarState(res.Data.CarGroups);
        })
    }

    ConvertCarGroupsToCarState(groups: CarGroups[]): CarState[] {
        let MarkIndex: number = 0;
        return groups.reduce((states, group, index) => {
            const carStates: CarState[] = group.Cars.map(car => {
                const state: CarState = {
                    ...car,
                    MarkerId: '#Marker' + MarkIndex.toString(),
                    GroupId: group.GroupId,
                    Marker: new google.maps.Marker({
                        position: new google.maps.LatLng(
                            car.LastCoordinate.Latitude, 
                            car.LastCoordinate.Longitude)
                    }),
                };
                MarkIndex++;
                return state;
            });
            return states
        }, []);
    }

    // CreateMarkerByLastLocation() {
    //     const { map, states } = this;
    //     if (!map) { return; }
    //     states.forEach(state => {
    //         const { Latitude, Longitude } = state.LastCoordinate;
    //         state.Marker = new google.maps.Marker({
    //             position: new google.maps.LatLng(Latitude, Longitude),
    //             map
    //         });
    //     })
    // }

    
    get Count() { return store.count; }
    Add() { store.Add(); }
}
</script>