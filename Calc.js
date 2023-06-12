function Calculator() {
    const [calc, setCalc] = React.useState({
      current: "0",
      total: "0",
      isInitial: true,
      prep: ""
    });
    function handleNumber(value) {
      let newValue = value;
      if (!calc.isInitial) {
        newValue = calc.current + value;
      }
      setCalc({
        current: newValue,
        total: calc.total,
        isIntial: false,
        preop: calc.preop
      });
    }
    function handleOperator(value) {
      const total = doCalculation();
      setCalc({
        current: total.toString(),
        total: total.toString(),
        isInitial: true,
        preop: value
      });
      function doCalculation() {
        let total = parseInt(calc.total);
        debugger;
        console.log(calc);
        switch (calc.preop) {
          case "+":
            total += parseInt(calc.current);
            break;
          case "-":
            total -= parseInt(calc.current);
            break;
          case "*":
            total *= parseInt(calc.current);
            break;
          case "/":
            total /= parseInt(calc.current);
            break;
          default:
            total = parseInt(calc.current);
        }
        return total;
      }
    }
    function handleClear() {
      setCalc({
        current: "0",
        total: "0",
        isInitial: true,
        prep: ""
      });
    }
    function renderDisplay() {
      return calc.current;
    }
    function handleEquals() {
      let total = doCalculation();
  
      setCalc({
        current: total.toString(),
        total: total.toString(),
        isInitial: true,
        preop: "="
      });
    }
  
    return (
      <div className="container">
        <div className="display">{calc.current}</div>
        <CalButton value="7" onClick={handleNumber} />
        <CalButton value="8" onClick={handleNumber} />
        <CalButton value="9" onClick={handleNumber} />
        <CalButton className="oper" onClick={handleOperator} value="/" />
  
        <CalButton value="6" onClick={handleNumber} />
        <CalButton value="5" onClick={handleNumber} />
        <CalButton value="4" onClick={handleNumber} />
        <CalButton className="oper" onClick={handleOperator} value="+" />
  
        <CalButton value="3" onClick={handleNumber} />
        <CalButton value="2" onClick={handleNumber} />
        <CalButton value="1" onClick={handleNumber} />
        <CalButton className="oper" onClick={handleOperator} value="-" />
  
        <CalButton value="C" onClick={handleClear} />
        <CalButton value="0" onClick={handleNumber} />
        <CalButton value="=" onClick={handleOperator} />
        <CalButton className="oper" onClick={handleOperator} value="*" />
      </div>
    );
  }
  function CalButton(props) {
    return (
      <button
        className={props.className}
        onClick={() => props.onClick(props.value)}
      >
        {props.value}
      </button>
    );
  }
  ReactDOM.render(
    <div className="app-container">
      <Calculator />
    </div>,
    document.getElementById("root")
  );
  