# Backend Tests

## BT-001 Backend Flask Server Startup [v0.4.0] - 2026-08-10
### Objective
Verify that the Backend Flask server starts successfully.

### Steps
1. Open terminal.
2. Navigate to `backend/`.
3. Start the Flask server by run `python3 app.py`.
4. Verify that the server is running successfully.

### Expected Result
* Flask server starts successfully.
* Backend is available for incoming requests.

### Actual Result
```bash
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 714-735-073
```

### Status
✅ Pass

## BT-002 Frontend–Backend Communication Verification [v0.4.0] - 2026-08-10
### Objective
Verify that the Frontend can successfully communicate with the Backend and retrieve Home data.

### Steps
1. Start the Backend Flask server as described in **BT-001**.
2. Start the Frontend development server as described in **FT-001**.
3. Open `http://localhost:5173/` in the web browser.
4. Verify that the Frontend receives the response from the Backend and displays the expected Home mock data.

### Expected Result
* Frontend successfully sends the request to the Backend.
* Backend responds successfully.
* Frontend receives and displays the expected Home mock data.

### Actual Result
* Frontend successfully connected to the Backend.
* Backend successfully returned the hardcoded `HOME_MOCK` data.
* Frontend successfully received the response.

### Note
The returned Home data is currently hardcoded mock data for testing purposes. Database integration and real Backend data are not implemented yet.

### Status
✅ Pass
