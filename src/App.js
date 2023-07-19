import MainApp from "./MainApp"
import ThemeProvider from "./context/ThemeProvider"


function App(){
    return(
        <ThemeProvider>
            <MainApp/>
        </ThemeProvider> 
    )
}

export default App