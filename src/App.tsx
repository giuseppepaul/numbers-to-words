import NumberToWordsConverter from './NumberToWordsConverter';

const demo = [1000, 101, 352, 12365781];

function App() {
  return (
    <div className="container-sm mb-5">
      <h1 className="text-center mt-5">Numbers to Words</h1>
      {demo.map((d, i) => <NumberToWordsConverter defaultValue={d} key={`converter_${i}`} />)}
    </div>
  );
}

export default App;
