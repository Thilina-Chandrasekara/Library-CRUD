# Library-CRUD
This summarizes the development of a small full‑stack Library CRUD application .
# Run Guide (Local)

This is exactly how I run the project locally using two terminals.  
Ports: **API = http://localhost:5228**, **UI = http://localhost:5173**.  


## setup (do once)

### Backend (.NET 9, EF Core, SQLite)
powershell terminal
# go to backend folder
cd D:\library-ms\backend

# enable local dotnet tools for this repo
dotnet new tool-manifest

# install EF CLI (for migrations)
dotnet tool install dotnet-ef --version 9.*

# restore + build
dotnet restore
dotnet build

# create DB schema and the SQLite file (library.db)
dotnet tool run dotnet-ef migrations add InitialCreate
dotnet tool run dotnet-ef database update


### Frontend (Vite + React + TS)
powershell terminal
# go to frontend folder
cd D:\library-ms\frontend

# install node deps
npm install
pulls packages the UI needs to run.


## Daily run (two terminals in same time)

### Terminal 1 — Start the API (port 5228)
cd D:\library-ms\backend
dotnet run --launch-profile backend

Runs the backend on **http://localhost:5228** . Keep this window open.

### Terminal 2 — Start the UI (port 5173)
cd D:\library-ms\frontend
npm run dev

Opens the frontend on **http://localhost:5173**. It calls the API at **http://localhost:5228/api**.
