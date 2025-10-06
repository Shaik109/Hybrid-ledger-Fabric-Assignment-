const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Dummy smart contract invocation simulation
app.post('/api/invoke', (req, res) => {
    const { function: functionName, arguments: args } = req.body;

    if (!functionName) {
        return res.status(400).json({ error: 'Function name required' });
    }

    // Simulate processing by smart contract on Fabric network
    // Replace with real Fabric SDK calls in real app
    console.log(`Invoking smart contract function: ${functionName} with args: ${args}`);

    // Mock response based on function
    let result;
    if (functionName === 'queryAsset') {
        result = { assetId: args[0], owner: 'User_123', value: 1000 };
    } else if (functionName === 'createAsset') {
        result = { message: 'Asset created successfully', assetId: args[0] };
    } else {
        result = { message: `Function ${functionName} invoked with args ${args}` };
    }

    res.json({ success: true, result });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`REST API server running on http://localhost:${PORT}`);
});
