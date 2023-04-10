import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Users from "./layouts/users";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import UseCallbackExample from "./layouts/useCallback";
import MemoExample from "./layouts/memo";
import CloneElementExample from "./layouts/cloneElement";
import UseRefExample from "./layouts/useRef";
import UseMemoExample from "./layouts/useMemo";
import HOCLayout from "./layouts/hoc";
import ReactChildren from "./layouts/reactChildren";
import ContainerWrapper from "./components/common/container";

function App() {
    return (
        <>
            <NavBar />
            <ContainerWrapper>
                <Routes>
                    <Route path="/users/:userId?" element={<Users />} />
                    <Route
                        path="/useCallback"
                        element={<UseCallbackExample />}
                    />
                    <Route path="/memo" element={<MemoExample />} />
                    <Route path="/useMemo" element={<UseMemoExample />} />
                    <Route
                        path="/cloneElement"
                        element={<CloneElementExample />}
                    />
                    <Route path="/hoc" element={<HOCLayout />} />
                    <Route path="/children" element={<ReactChildren />} />

                    <Route path="/useRef" element={<UseRefExample />} />
                    <Route path="/" exact element={<Main />} />
                    <Navigate to="/" />
                </Routes>
            </ContainerWrapper>
        </>
    );
}

export default App;
