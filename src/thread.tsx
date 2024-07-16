import { FC, useState, useEffect } from "react";
import axios from "axios";
import requests from "./Request";
import { ApiType } from "./interfaces";



const Api: FC = () => {
    const [info, setInfo] = useState<ApiType[]>([]);  // 型指定を追加

    useEffect(() => {
        const getApiData = () => {
            axios
                .get(requests.fetchApiData)
                .then((res) => {
                    const datad: ApiType[] = [];  // datadの初期化をここで行う
                    res.data.forEach((resData: any) => {
                        const data: ApiType = {
                            id: resData["id"],
                            title: resData["title"],
                        };
                        datad.push(data);  // datadにpush
                    });
                    setInfo(datad);  // setInfoにdatadを渡す
                })
                .catch((error) => {  // エラーコードが返ってきた場合
                    console.log(error);  // エラーコードを表示
                });
        };
        getApiData();
    }, []);

    return (
        <div>
            {info.map((item) => (
                <div key={item.id} >
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Api;
