import { FormProvider } from "./contexts/FormContext";
import { Router } from "./routes/router";


const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}
export default App;