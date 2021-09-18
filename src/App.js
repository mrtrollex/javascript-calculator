import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === '=') {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line
      setAnswer(eval(expression));
      setExpression((prev) => prev + '=');
      console.log(expression);
      console.log(answer);
    } catch {
      if (expression[expression.length - 1] === '=') {
        setExpression(answer);
      } else {
        setExpression('');
        setAnswer('math error');
      }
    }
  };

  const allClear = () => {
    setExpression('');
    setAnswer(0);
  };

  const clear = () => {
    setExpression((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <div className="calculator" id="bootstrap-overrides">
      <div className="grid">
        <div className="display">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div
          className="calculator-button AC btn btn-lg btn-danger"
          onClick={allClear}
        >
          AC
        </div>
        <div
          className="calculator-button C btn btn-lg btn-danger"
          onClick={clear}
        >
          C
        </div>
        <div
          className="calculator-button divide btn btn-lg btn-info"
          onClick={() => display('/')}
        >
          /
        </div>
        <div
          className="calculator-button multiply btn btn-lg btn-info"
          onClick={() => display('*')}
        >
          *
        </div>
        <div
          className="calculator-button seven btn btn-lg btn-default"
          onClick={() => display('7')}
        >
          7
        </div>
        <div
          className="calculator-button eight btn btn-lg btn-default"
          onClick={() => display('8')}
        >
          8
        </div>
        <div
          className="calculator-button nine btn btn-lg btn-default"
          onClick={() => display('9')}
        >
          9
        </div>
        <div
          className="calculator-button minus btn btn-lg btn-info"
          onClick={() => display('-')}
        >
          -
        </div>
        <div
          className="calculator-button four btn btn-lg btn-default"
          onClick={() => display('4')}
        >
          4
        </div>
        <div
          className="calculator-button five btn btn-lg btn-default"
          onClick={() => display('5')}
        >
          5
        </div>
        <div
          className="calculator-button six btn btn-lg btn-default"
          onClick={() => display('6')}
        >
          6
        </div>
        <div
          className="calculator-button plus btn btn-lg btn-info"
          onClick={() => display('+')}
        >
          +
        </div>
        <div
          className="calculator-button one btn btn-lg btn-default"
          onClick={() => display('1')}
        >
          1
        </div>
        <div
          className="calculator-button two btn btn-lg btn-default"
          onClick={() => display('2')}
        >
          2
        </div>
        <div
          className="calculator-button three btn btn-lg btn-default"
          onClick={() => display('3')}
        >
          3
        </div>
        <div
          className="calculator-button equals btn btn-lg btn-info"
          onClick={calculate}
        >
          =
        </div>
        <div
          className="calculator-button zero btn btn-lg btn-default"
          onClick={() => display('0')}
        >
          0
        </div>
        <div
          className="calculator-button decimal btn btn-lg btn-default"
          onClick={() => display('.')}
        >
          .
        </div>
      </div>
    </div>
  );
}

export default App;
