import {Outlet} from "react-router";

function IndexPage() {
    return <>
        <Outlet/>
    </>
}

export default function IndexRoute() {
    return <>
        <IndexPage/>
    </>
}