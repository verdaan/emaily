module.exports = (text) => {
  return `
    <html>
      <body>
        <div style="text-align: center>
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${text}</p>
          <div>
            <a href="http://localhost:3000>Yes</a>
          </div>
          <div>
            <a href="http://localhost:3000>Yes</a>
          </div>
        </div>
      </body>
    </html>
  `;
}