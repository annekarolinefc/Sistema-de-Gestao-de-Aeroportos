class Produto {
    #id;
    constructor(id_aeroporto,nome_aeroporto, codigo_iata, cidade, codigo_pais_iso, latitude, longitude, altitude) {
        //this.#id_aeroporto = id_aeroporto;
        this._id_aeroporto = id_aeroporto;
        this._nome_aeroporto = nome_aeroporto;
        this._codigo_iata = codigo_iata;
        this._cidade = cidade;
        this._codigo_pais_iso = codigo_pais_iso;
        this._latitude = latitude;
        this._longitude = longitude;
        this._altitude = altitude;
    }
    get ID() { return this.id_aeroporto; }
}