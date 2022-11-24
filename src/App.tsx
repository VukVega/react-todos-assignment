import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ m: 4 }}>
          <Typography variant="h4">Happy coding 🚀</Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;

