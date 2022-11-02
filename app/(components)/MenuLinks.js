import Link from "next/link";

export default function menuLinks(props){
    //  [ {name: "" , url: "" } ]
    let navLinks = []
    for (let elem in props.objArray){
        navLinks.push(
            <div>
                <Link key={props.objArray[elem].url} href={props.objArray[elem].url}>{props.objArray[elem].name}</Link>
                <br/>
            </div>
        )
    }
    return(
        <div className={"navlinks"}>
            {navLinks}
        </div>
    )
}