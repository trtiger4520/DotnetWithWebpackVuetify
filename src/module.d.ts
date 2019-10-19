interface LocationData {
    lat: number;
    lng: number;
}

interface ResponseViewModel<DataType = any> {
    HttpStatusCode: number,
    ResponseTime: string,
    Exception: any,
    Success: boolean,
    Message: string,
    Data: DataType | null
}

interface GetMonitorData{
    GroupOperation: Operation[];
    CarGroups: CarGroups[];
}

/**營運分類群組*/
interface Operation {
    StatusCode: number;
    StatusText: string;
    BelongCStatusName: string[];
    BelongCStatus: number[];
}


/**群組車輛資訊*/
interface CarGroups{
    /**公司編號*/
    CompanyId: number;
    /**公司名稱*/
    CompanyName: string;
    /**群組編號*/
    GroupId: number;
    /**群組名稱*/
    GroupName: string;
    /**群組車輛資訊*/
    Cars: Car[];
}

/**車輛資訊*/
interface Car {
    VehicleId: number;
    VehicleNo: string;
    DriverUserId: string;
    DriverName: string;
    cStatus: number;
    OperationalStatus: string;
    StatusColor: number;
    CarIcon: string;
    TaskId: number;
    UpdateTime: string;
    LastCoordinate: LastCoordinate;
    LocationAddr: string;
}

/**車輛最後位置資訊*/
interface LastCoordinate {
    Latitude: number;
    Longitude: number;
    GAngle: number;
    Direction: string;
}

interface CarState extends Car {
    MarkerId: string;
    GroupId: number;
    Marker: google.maps.Marker | null;
}