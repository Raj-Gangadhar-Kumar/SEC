<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: #f4f4f4;
    }
    .calculator {
      background: #fff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
      text-align: center;
    }
    #display {
      width: 220px;
      height: 40px;
      margin-bottom: 15px;
      font-size: 18px;
      text-align: right;
      padding: 5px;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 55px);
      gap: 10px;
    }
    button {
      height: 50px;
      font-size: 18px;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      background: #e0e0e0;
      transition: background 0.2s;
    }
    button:hover {
      background: #d0d0d0;
    }
    .equal {
      grid-column: span 2;
      background: #4CAF50;
      color: white;
    }
    .equal:hover {
      background: #45a049;
    }
    .clear {
      background: #f44336;
      color: white;
    }
    .clear:hover {
      background: #d32f2f;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" disabled>
    <div class="buttons">
      <button onclick="appendValue('7')">7</button>
      <button onclick="appendValue('8')">8</button>
      <button onclick="appendValue('9')">9</button>
      <button onclick="appendValue('/')">÷</button>

      <button onclick="appendValue('4')">4</button>
      <button onclick="appendValue('5')">5</button>
      <button onclick="appendValue('6')">6</button>
      <button onclick="appendValue('*')">×</button>

      <button onclick="appendValue('1')">1</button>
      <button onclick="appendValue('2')">2</button>
      <button onclick="appendValue('3')">3</button>
      <button onclick="appendValue('-')">−</button>

      <button onclick="appendValue('0')">0</button>
      <button onclick="appendValue('.')">.</button>
      <button onclick="calculate()" class="equal">=</button>
      <button onclick="appendValue('+')">+</button>

      <button onclick="clearDisplay()" class="clear">C</button>
    </div>
  </div>

  <script>
    let display = document.getElementById("display");

    function appendValue(val) {
      display.value += val;
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    function clearDisplay() {
      display.value = "";
    }
  </script>
</body>
</html>
