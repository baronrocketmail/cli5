import React from "react";
import Link from "next/link";


async function getName(){
    const info = await fetch("https://server-neon-tau.vercel.app/api/name", {next: {revalidate: 1}})
    return info.json()
}

async function getApplicationsOpen(){
    const applicationsOpen = await fetch("https://server-neon-tau.vercel.app/api/applicationsOpen", {next: {revalidate: 1}})
    return applicationsOpen.json()
}

async function getUnpaid(){
    const unpaid = await fetch("https://server-neon-tau.vercel.app/api/unpaid", {next: {revalidate: 1}})
    return unpaid.json()
}

export default async function Page(){

    const name = await getName()
    const applicationsOpen = await getApplicationsOpen()
    const unpaid = await getUnpaid()

    let menuLinksObjArray = [{name: name, url: "/"}]

    if (applicationsOpen) {
        menuLinksObjArray.push({name: "apply now", url:"/log"})
        menuLinksObjArray.push({name: "view lease", url:"/viewlease"})
        menuLinksObjArray.push({name: "..." ,url: "/explainer"})
    } else {
        menuLinksObjArray.push({name: "autopay", url:"/autopay"})
        menuLinksObjArray.push(...unpaid)
        menuLinksObjArray.push({name: "...", url:"/log"})
    }
    let navLinks = []
    for (let elem in menuLinksObjArray){
        navLinks.push(
                <div>
                    <Link key={menuLinksObjArray[elem].url} href={menuLinksObjArray[elem].url}>{menuLinksObjArray[elem].name}</Link>
                    <br/>
                </div>
                )
    }


    return(
            <div>
                <div className={"navlinks"}>
                    {navLinks}
                </div>
            </div>
    )
}
