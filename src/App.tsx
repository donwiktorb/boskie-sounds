
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    let [files, setFiles] = useState<{[index:string]:any}>({})

    const getDirs = () => {
        return fetch('/cars/sounds/sounds/test.json').then(res=>{
            return res.json()
        }).then(res => {
            return res
        })
    }

    useEffect(() => {
        getDirs().then(res => {
            setFiles(res)
        })
    }, [])


  return (
    <div className="w-full h-max bg-gray-900 flex justify-center items-center">
        <div className="w-full h-full">
            <div className="w-full h-1/4 text-center text-white">
                <h2 className="text-2xl">Hi</h2>
                <h2 className="text-2xl">Tutaj możesz sprawdzić dzwięki</h2>
            </div>
            <div className="w-full h-3/4 grid grid-cols-5 gap-4 ">
                {Object.keys(files).map((v,i) => {
                    return <div className="w-full h-full text-white text-2xl">
                        <h2>{v}</h2>
                        {files[v].map((nv:string) => {
                            return <div>
                                <h2>{nv}</h2>
                                <audio controls>
                                    <source src={process.env.PUBLIC_URL+`/sounds/sounds/${v}/${nv}`} type="audio/wav"/>
                                </audio> 
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    </div>
  );
}

export default App;
