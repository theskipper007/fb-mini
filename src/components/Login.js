import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth, provider} from './firebase';
import {useStateValue} from '../StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            })
            console.log(result.user)
        }).catch(error => alert("Error Occured Try again later"))
    } 
    return (
        <div className = "login">
            <div className = "login__logo">
                <img
                    src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAACtCAMAAAAu7/J6AAAAmVBMVEX///9Kfbwli7U4c7jm6/RHe7s/d7keibQVh7OLudFAlbtDebr0+fs5lLvm8fZaisNnpsVLncDa6/KYstfA0OajxtlaocOzxN9Pgr+JqdLz9voAg7Dc5fGBos7X4O6XstZysMyRwdd+ttDE3enN2Oltk8aDpM+hudq3yeLB0ed3m8tokcaszd7e7fScyNu41uQAfKwrbbXB3Oi6wJtvAAAI9klEQVR4nO2d63qqOhCGKwqhHBRxV624VFB7sB7a3v/FbTAJBAgQkINPnfdPl+0Eks9kkkwG1tMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzEcrebzSavSSaz2W436Lpyd8Hgfd/rKz56kuCX/fnhY9F1Fbtm+aYostzLQVfm64fuTsNXRc9VCKP03ruuaXfsdKVYoQBZmT9qZ5qJKYQH3XzXdXU74V0vIVJPlmddV7gDZn0Bb8Sq1F91XeXW+fwpJVGA8mh+aSUyqyX70v6xVkyLr1IOidB/rJXAR2LulxU+ie72WAuBeaz1urJ/n338l+RjNvlSYj1Oeeu64i0S60iy/pbdQZb7uOmyxVp2TMwjKbmexpjEbB9nsbToC2vks2b6kr5vpYL3wIxptrIuNB8xDqxvtFC/u+CNGUHz4rXPjjFXPluo3z1gHKJW668CBZiupHw0Xr37wNgzjf5PoMBrJGqhB/srGGzPENm1Mj5MmTRevftgMY8WPj2Rhc8qEkn+13j17oPyIvVBpEJAJIECIJJAARBJoACIJFAARBIoACIJFACRBAqASAIFHlEko8eE+oVE+gnN+w8h0mA3W7PR/vdJIev3z9D8czaZ7YbxS7qSGTAe8u/YGBa+77TmOODifdTT+3P2qoeMwySGPhtzWimK3vuKBVieVckHma2LhO87rlek1ShI2JJHbDDyUHxKGQvMrYIr6Ap7mItFkv6GSEty1jiK9aSSIi1xXpzCKP2XRFqMsB7yfMbwVZwTIO8/Ivs1sVcO4YX/kkjh0VDsTLtQokSBsONF0e7uRApw6hRp1SufR5KrXDjguhLp7F1xaxRpLZgfKUx4htCVSA0g4KHLodPsiT8k0qhmjXryF7nyHxIpmWt0u0gjcuU/JFKF/D8QCUTicEcinbauZQV7U8t62eaVsi/P2DAwtbzj9sT+dfrt+HybZAlgO/7n7zO9x2VjaX457XlbYolwLyItjmMJqQhdV8tIVU3twm/FyTUllRgGpkh1kKRNvQs1sFBsxW1L/me0Cf5pHDVaNLiDK/z13YdIhqs5tN0E5IyPacOhJzlS3DCw9RsdrrAT2xIs0phzD8e8pG9wvyIZUyfV8EAmK2m4RWraDhtP80Tya2Fr6aIO52uoLpIs67qgnBVEGkoZTVfNmLd5On9nSFQokmTxvgbJ2dYnkqLvD4fDVyqBux6RjGmoEbpuTqPmoFhc8+IwohDo2CsSCbHlok9i22CBduvz90FwrcVyIrAbLi/SM9XId8Ce67PRQt+hbiI7O5ISaRvMWCMNLhIJGzmm5ReaamHXVYXcUvCQrXJ9sjar/cohCqStRoVbvdIibVX6HVt0Wja247AVv6HhOJzRPDvsAMZ2igRFQqp5xMPXsD2HdiURkVarZcBq9ZHRfiV2ELLYF0UNSos0JY1wYl+qS1thhmKS36iJIWIJiqSOf5lS9PqSLaJS1P45r83JRD82abAWkeggSs40Z9KXVOpbsRiSOk1cQFAkx4ppa2gofnlBJpyuJM+TVquCrlRWJA+b4eUei4liXmmBv3qkJV2tmEjISpQ74vuqL/nVS7Ln9BFO7vG/fLdUViSTdJhUt7+QrkTGG5na0p5WTKSUGENyPS+/enEW3BglJ+l9Va9ITkwKBoPI5wzzL1dRJHLjdA/moOgygdd2/ZAuUeCVSor0m/2Fbsh4uzorg0xiqUV4ZZHwdyA0vSk9ohG3xdwnA3jDsrJI1DVw1ivEdatu8IE4WvU5ZdaCSPkrbu5zOP9qFYn0es4kQ+Z8rMuQjL30bqtzkbgpNbX2pBc1UyQbxURC0diL0flwC1vMsMg/O6gmUmIne+UkMa71hLsVZ0faRk+ibeO+NEHmPIO8zN/A1SfSkDTj6qs7FWk5wCx3e970xnlwtOA4s5JIiLc7OJFl4Ob6gYj0mzJrQaQI/raklzQzCuIG1XqSxPNJKuuT1A4dNwNvW5Ke394K4gAVlwDFsxtuq5sya1Ukg59u049vTF5rjgIcM3vIk0v0u550DFkvHqMFkRaUQUbz5d462poM/hXmV5QUaZu9OyDbfuyGjHH8EKRVkXpzgpI1jGSlRx9D/tSL0yvK7t1o2Dr1BzLApG/cWi9rXLaxThJ5eRvdnBSOtQoikXhjel9CRhvS8MdjVkil8xU3JtzBcV37jSKdqRaJcWTQQCTZrQ1pqDK5CHgEkYhHTs1bHo1M0mUmcVEoue58BJGeNkQNh1VpaNGOE0ZraRAOSbGZ8DRuXqSfnz4hW4BmRTrR8yPVpMf/xpGe+SDGUZv02MPRXq7HJUN7GxxdS42LRDFWh0yvfItISHLPGdCdyJEeXCAVTb3z2RtHh9ls9wrP3QJD/BOFB5ltbUsyI4439SR8KMvhOxw1m/BkFl2to7QGNRaIPCdPcCXmc5fbkphI6woiZRItso1xhqmaeHpn4/Dt2hMpO3YtH/DzSJ8iqboVRPIbxs8qSQW+3W9e2kPjIg0oqxwFaO6/SHJFJZGejonkG38sOdN0WOTp13LU+DBTW3Dc4baEe1pSgWoiBc3XEHZHQfKaNLYyzp/twK9TO9/Tn8VyATgi4XKagEj54dtbRHJNLRczufEf2kfPmmra1PIutpGsaIRhX7yNbzeeeq5NcwkikTbX+4YPBZ4y7vY0xr9PnprzaC7TrSVokHfT4D2aS3ZviW2V4+qS8GO2t4jU8jPL5JzXORebVoYb/r+Flt9ctqWZNZzjltqY1f4oV3Pvej+lt4EXmv2Wysipk0HNGsWfd64XfykZPCsQymG/mHR1JZpsXJGanwoUeq9gRVwV72hNU5v6mFFmc9kdWFmM7N1/FY1EXlBZFZfEFaREojH/bLNWinNFhZGVRt/y7mas4ZFYovFtrIv+uxsxhfwdXrMzG18k5Jglk0OrsXz9kvu3Iu9fG34t9xk5qhp7/MYfco5WMjW0OovB7TT+JmVjaLuWJjk0bOeokmb9PswLnEtg2Nvj88bzNt7LcZu3DwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADul/8BS/7TSMsQFVwAAAAASUVORK5CYII="
                    alt = "Logo" 
                />
            </div>  
            <Button
                onClick = {signIn} 
                className = "login__button"
                type = "submit" 
            >SignIn</Button>   
        </div>
    )
}

export default Login
