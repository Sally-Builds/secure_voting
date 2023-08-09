import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { toast } from "react-toastify";

/**
 * import Layouts
 */
import MainLayout from "../containers/Layouts/MainLayout";
// import UserLayout from "../containers/Layouts/UserLayout";
/**
 * import views
 */
import Home from "../containers/Views/Home";
import { loadContract } from "../utils/loadContract";

const Router = () => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    contract: null,
    web3: null,
    isInitialized: false,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const web3 = new Web3(provider);
      // const contract = loadContract("Evote", provider);
      if (provider) {
        setWeb3Api({
          provider,
          web3,
          contract: null,
          isInitialized: true,
        });

        // console.log(await new web3(provider).eth.getAccounts());
      } else {
        setWeb3Api((api) => ({ ...api, isInitialized: true }));
        console.log("install metamask");
      }
    };

    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
      connect: web3Api.provider
        ? async () => {
            await web3Api.provider.request({ method: "eth_requestAccounts" });
          }
        : () => {
            toast("cant connect");
            console.log("cant connect to web3 provider");
            window.location.reload();
          },
    };
  }, [web3Api]);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout web3={_web3Api} />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
