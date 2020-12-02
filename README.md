# Walk Me!  (name TBC)

# Getting Started

* Clone & Make a branch Steps 1 - 4
* Merge your feature Steps 5 - 11

## 1. Clone
```
cd workspace
git clone + https link
cd myRepo
```
## 2. Make a branch using the name of your feature
```
git checkout -b feature/aFeature  
code .  
```
## 3. Instal modules & reset the database
```
npm i
npm run knex migrate:latest
npm run knex seed:run
```
## 4. Commit & Push your branch
```
git status 
git add .  
git commit -m “commit message”  
git push origin myBranch  
```


# MERGE TIME!! Git Protocol in a Team!
* Feature is done, ready to create a pull request to Development?? 

## 5. Commit your branch
```
git add .  
git commit -m “readyToMerge”   
```

## 6. Pull Development into your branch, open VScode & deal with the conflicts there.

```
git pull origin Development
code .
```
## 7. Vscode

* Files marked C = Conflict
* Files marked M = Modified
* <<<<< Head  = This is you! Current changes, you are HEAD
* <<<<<< Incoming change = pulled in from the Development branch

## 8. Any conflicts or changes need to be saved, added, & committed again

```
git add .
git commit -m “mergeTime”
git push origin myBranch
```
## 9. Github - create pull request

* Create pull request from mybranch to Development (on github)
* Tell the git keeper, they will merge the pull request and there should be 0 conflicts as you have already resolved these in your branch.

# Create a new branch with a new name
```
git checkout -b feature/myNextFeature  
code .  
```
## 10. GitKeeper (This is Kelly!) - merge the request

* Merge the pull request on Github only if there are 0 conflicts, then delete the branch.

## 11. Everyone else now needs to pull from Development & update their modules
```
git pull origin Development
npm i
```
* Reset database
```
rm server/db/dev.sqlite3
npm run knex migrate:latest
npm run knex seed:run

```

## Update 3.01pm HR
just pulled and app crashing? 
run this in the terminal for auth:

```
 cp .env.example .env
```
once your database has first been populated, you can now use this shortcut
to delete the sql file, run migrations and run seed sequentially
```
npm run db-reset
```
You can now use this shortcut
to run lint, then fix lint
```
npx eslint --ext .js,.jsx . --fix
```
# -----PRIORTY ---

## WIREFRAMES ADD HERE

### ADD NOTES - Major Components

#### ADD NOTES -Components & Children

# -----the do: ---

## ADD NOTES - API

###  ADD NOTES - API Request and response bodies

## ADD NOTES - Global State

The global state object looks a bit like this:

## ADD NOTES - Database Diagram

## Details

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Jest and Enzyme (including JSDOM)
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)
