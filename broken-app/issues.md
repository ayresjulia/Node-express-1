# Broken App Issues

- added 'let results = await Promise.all(promises)' to wait for all promises from api before proceeding with using results (otherwise results will be an empty array since data doesn't have time to process). also added word 'async' to the function in order for await to work.

- replaced required modules with const declarations: from 'var app' to 'const app', from 'let axios' to 'const axios'

- added (err) to catch, it was missing
  
- switched 'res.send(JSON.stringify(out))' to 'res.json(filteredResults)' for cleaner code
  
- renamed one-letter elements (like 'd') for achieve more readable code
  
- made app.listen(3000) more explicit by adding a function that console.logs 'Server starting on port 3000'

- added app.use(express.json()) to parse request body
