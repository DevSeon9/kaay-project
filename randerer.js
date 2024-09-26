const wmi = require('node-wmi');

function helloWorld() {
    alert('Hello World');
}

wmi.query('SELECT * FROM Win32_Process', (err, processes) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(processes);
  });