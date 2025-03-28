import { Header } from "./features/header";
import NotFound from "./pages/404";
import { Mint, MintLayout, Trading } from "./pages/mint";
import { Home, SniperLayout } from "./pages/sniper";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { SniperLayout, Home } from "@pages/sniper";
// import { MintLayout, Mint ,Trading} from "@pages/mint";
// import NotFound from "@pages/404";
// import { Header } from "@features/header";

function App() {
  return (
    <div className="dark bg-dracula-background text-dracula-foreground min-h-screen">
      <BrowserRouter>
      <Header />
      <Routes >
        <Route element={<SniperLayout />} path="/sniper"  >
          <Route path="" element={<Home />}></Route>
        </Route>
        <Route element={<MintLayout />} path="/token" >
          <Route path="pools" element={<Mint />}></Route>
          <Route path="trading" element={<Trading/>}></Route>
        </Route>
        <Route path="/" element={<Navigate to="/sniper" replace />} />
        <Route path="*" element={<NotFound />}>
        </Route>
      </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
