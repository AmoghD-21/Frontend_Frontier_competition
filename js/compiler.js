document.getElementById('runBtn').addEventListener('click', () => {
    const code = document.getElementById('codeEditor').value;
    const language = document.getElementById('language').value;
    
    if (!code.trim()) {
      document.getElementById('output').textContent = 'Error: Code is empty!';
      return;
    }
    
    // Simulating output for now
    document.getElementById('output').textContent = `Running ${language} code...\nOutput: Hello, World! (Example)`;
  });
  
  document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('codeEditor').value = '';
    document.getElementById('output').textContent = 'Waiting for code...';
  });
  