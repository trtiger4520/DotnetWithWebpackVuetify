import store from './index';
import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";

@Module({ namespaced: true, dynamic: true, store, name: 'gmapstore' })
export default class GMapStore extends VuexModule {

    count: number = 87;    

    @Action
    Add() {
        this.context.commit('SETCOUNT', this.count + 1);
    }

    @Mutation
    'SETCOUNT'(val: number) {
        this.count = val;
    }
}