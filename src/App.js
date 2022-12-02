import cat from './assets/images/cat.png';
import './App.css';

function App() {
  const randomImageUrl = "https://picsum.photos/400/264";
  return (
    <div className="App">
      <h1>Task: Add three images, using three different 
        methods</h1>
      <img
      height = {200}
      src = {cat}
      alt = "young cat looking up at camera"
      />
      <img
      height = {200}
      src = {require("./assets/images/cute-kittens2.jpeg")}
      alt = "cute kitten, laying on it's back"
      />
      <img
      src = {randomImageUrl}
      height = {200}
      alt = "some random pic from the internet"
      />
    </div>
  );
}

export default App;
