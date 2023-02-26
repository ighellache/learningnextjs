import Link from "next/link";
import { useEffect } from "react"; //useeffect hook
import { useRouter } from "next/router";
//userouter hook gives us method we can use to redirect the user

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push('/'); //redirect to homepage
        }, 3000)
        console.log("use effect ran")
    }, []) //adding empty array so that it only find this function once when the component first mounts and not again if any state changes

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;

//for pages that dont exist