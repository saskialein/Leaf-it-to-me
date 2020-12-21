# Leaf it to me - A plant care App
This project was created in 7 days in a group of 7 people as part of our web development bootcamp at [Enspiral Dev Academy](https://devacademy.co.nz/).
Apart from being the product owner of this project, I have worked on the functionality, API calls, image uploads to AWS S3 and a little bit of CSS.

## Technologies
* React & Redux (incl. Redux Thunk)
* Node.js & Express.js
* SQLite3
* AWS S3
* Authentication
* SCSS


## Wireframes & components
Components showing on all pages - Header.jsx, Nav.jsx

### Page 1
#### Components - Home.jsx, PlantList.jsx, Plant.jsx
#### Wireframe:
![Home](wireframes/Homepage.png)

### Page 2 
#### Components - IndividualPlant.jsx
#### Wireframe:
![IndividualPlant](wireframes/PlantProfile.png)

### Page 3
#### Components - Login\Register\User\.jsx
#### Wireframe:
![Login\Register\User](wireframes/SignUp.png)

### Page 4
#### Components - SavedPlants.jsx, PlantList.jsx Plant.jsx
#### Wireframe:
![SavedPlants](wireframes/UserProfileWithPlants.png) 


### page 5 
#### Components - AddPlantForm.jsx
####   wireframe:
![AddNewPlantToDataBase](wireframes/NewPlantProfile.png)


## USER STORIES

### Unauthorised Users:
- [x] As an unregistered user I would like to be able to see a list of all of the plants on the homepage
- [x] As an unregistered user I would like to be able to search for a specific plant on the homepage
- [x] As an unregistered user I would like to click on a plant from the homepage & be re-directed to see it’s individual profile page
- [X] As an unregistered user I would like to be able to click on a button on the plant to add a new plant and then be re-directed to the signup page which will tell me I need to register before I can add new plants to the main plant list and/or my own profile
- [x] As an unauthorised user I would like to be able to register
- [x] As an unauthorised user I would like to be able to log in

### Authorised Users: 
- [x] As a signed in user I would like to be able to see a list of all of the plants on the homepage & then click on a plant to be re-directed to it’s individual profile page where I would be able to click to add the plant to my profile
- [x] Once I’ve signed into my account (via clicking the login link on homepage) I’d like to be able to see a list of all of my saved plants 

- [x] As a signed in user if I select to add my own plant I’d like to be able to fill out a form with my plant’s name & care details and also add an image.
- [x] I would like to be able to log out

#### At this stage all MVP user stories are complete :) however it'd be good to work on the general functionality / user experience flow of the site to ensure it's easy to use & accessible for all. I've listed some suggestions below: 

### Functionality / UX Tweaks: 

### Unauthorised Users: 
- [ ] When I click to 'Sign Up' this page heading should say 'Sign Up' rather than 'Register' and could incl more descriptive details on what I get by signing up i.e 'Sign up to add plants to your very own personalised profile where you can keep track of all of your plant needs in one handy location and leaf the rest to us". It'd also be good to add more fun / descriptive words to the sign up form and submit button
- [ ] When I click 'more details' from the hompage to see an individual plant profile I currently don't see any of the care categories - i.e water, sun instead we just see the needs i.e 'once a week'. Make sure we are rendering care icons, or otherwise render care categories on this page & update addplant button text 
- [ ] Would be good to indicate to user what page of the site they're on by for eg having the navlink of the current page underlined or a different colour when active - someone to do research into this / ask Bren, should be able to style Nav with 'active' keyword attached differently 

### Authorised Users: 
- [ ] When on my 'Saved Plants' page perhaps add tagline up the top & update plant buttons 

## STRETCH USER STORIES

### Authorized Users:
- [ ] As a user I'd like to see my name or usersname on my profile to indicate that it's my profile.
- [ ] As a signed in user I'd like to be able to edit my saved plants to add additional notes about my plants but only render these edited plants on my 'saved plants list' rather than the homepage
- [ ] As a signed in user I would like to be able to see a list of all the plants on the homepage and tick which plants I’d like to add to my profile 
- [x] As a user I'd like to be able to delete a selected plant of my choice that was added into my profile.
- [x] Once signed in I’d also like to see a ‘add your own plant’ button which once clicked would ask me if I would like to add a new plant to my profile from the existing database (in which case I’d be directed back to the homepage) OR whether I’d like to add my own custom plant 

## APIs

| Method | Path | Description | NOTES |
|---|---|---|---|
| POST | /api/v1/register | Adds a user - registering them | Authenticare
| POST | /api/v1/login | Logs a user in and gets a users info from the DB | Authenticare
| GET | /api/v1/user | Gets the user information
| GET | /api/v1/plants | Gets all plants from the DB
| POST | /api/v1/plants| Adds a newly created plant to the plants DB
| GET | /api/v1/plants/saved | Gets the logged in persons plants from the users_plants DB
| POST | /api/v1/plants/saved | Adds a plant to the users_plants DB (from the plants list or a newly created one)
| POST | /api/v1/image-upload | Adds an updoaded plant image as an AWS http string to the plants DB

## API Request and response bodies

### /api/v1/plants

##### _Response_

```js 
 plants: {
      id: int,
      common_name: string,
      species_name: string,
      water: string,
      light: string,
      temp: string,
      humidity: string,
      soil: string,
      img: url
      }
```

### /api/v1/plants/saved

##### _Request_

```js
{
 user_plants: {
      id: int,
      user_id: int,
      plant_id: int
  }
}
```


### /api/v1/user

##### _Response_

```js
{
  id
  username
}
```

### /api/v1/plants/saved

##### _Response_

```js
 user_plants: [{ 
    0: {
      id: int,
      user_id: int,
      plant_id: int,
      name: string,
      notes: string,
      img: url
      },
  }]
```

## Global State

The global state object looks a bit like this:


```js

const globalState = {
  plants: [{
    0: {
      id: int,
      common_name: string,
      species_name: string,
      water: string,
      light: string,
      temp: string,
      humidity: string,
      soil: string,
      img: url
      },
  }],
  auth: {
    loggedIn: bool,
    user: {
      id: int,
      username: string,
    }
  },
  user_plants: {
      id: int,
      user_id: int,
      plant_id: int
  }
}
```

## Database Diagram
![DatabaseDiagram](server/public/Diagram_inital_plan.png)


## Accessibility
pulling out all of the Web Content Accessibility Guidelines (WCAG) that apply to our site currently. not all of this will be doable in our time frame of course, i am just throwing up most of whats relevant to our project and we can try and do what we can

### Principle 1 - PERCEIVABLE
#### 1 Text alt:
- Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language
- Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose.
Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology
- Colour
- Large-scale text and images of large-scale text have a contrast ratio of at least 3:1
- Some people with cognitive disabilities require specific color combinations of foreground text and background to help them successfully understand the contents of the Web page. Most popular browsers provide the option to change colors settings globally within the browser. In this case the colors selected by the user override the foreground and background colors specified by the Web author. --In order to meet this success criteria, the Web author would design             the page so that it works with browsers that have these controls, and           the author does not override these controls.
- Text can be resized wihtout assistive tech up to 200% w/out loss of content or functionality
- Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: 

     Vertical scrolling content at a width equivalent to 320 CSS pixels;

     Horizontal scrolling content at a height equivalent to 256 CSS pixels;

- In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property: 

     Line height (line spacing) to at least 1.5 times the font size;

     Spacing following paragraphs to at least 2 times the font size;

     Letter spacing (tracking) to at least 0.12 times the font size;

     Word spacing to at least 0.16 times the font size.
     
#### 2 Operable:  
- All functionality of the content is operable through a keyboard interface *THIS WILL NOT LIKELY BE SOMETHING WE CAN DO BUT WE CAN MENTION IT DURING OUR PRESENTATION FOR WHAT WE WOULD DO IF WE HAD MORE TIME AND WHY *
- When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.
- Web pages have titles that describe topic or purpose/Headings and labels describe topic or purpose.
- If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
- The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.
- More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.
- Information about the user's location within a set of Web pages is available.
- Section headings are used to organize the content.

#### 3 Understandable:
- The default human language of each Web page can be programmatically determined.
- Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.
- Components that have the same functionality within a set of Web pages are identified consistently.
- Labels or instructions are provided when content requires user input
- For Web pages that require the user to submit information, at least one of the following is true: 

         Reversible: Submissions are reversible.

         Checked: Data entered by the user is checked for input errors and the          user is provided an opportunity to correct them.

         Confirmed: A mechanism is available for reviewing, confirming, and            correcting information before finalizing the submission.
      
 #### 4 Robust:
 - Parsing: In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

## GIT PROTOCOL: 

Each time we merge a new feature, we need to get back on the same page, I spoke to Ross and Kelly, best practice is to actually delete the local version of development that you have on your computer, and then bring it down again so you are sure you have the exact same. To do this, please do these commands:

- Firstly, you need to be in a different branch to development, so either move to a branch you have or make a new one. `git checkout -b newbranch`
- Now delete the local/your computers version of development `git branch -D development`
- Now let’s pull down the latest, start with Fetch to make sure you have all the branches `git fetch`
- Now move into development- it will be exactly the same as the remote git checkout development gst or git status, make sure your tree is clean and up to date!
- Now you can branch off from our shared/latest development, to a new branch `git checkout -b myNewBranch`
- Your old branch will be deleted! It’s merged in at this point so we should not confuse ourself by keeping it.

## MERGE TIME!! Git Protocol in a Team!
* Feature is done, ready to create a pull request to Development?? 

### 5. Commit your branch
```
git add .  
git commit -m “readyToMerge”   
```

### 6. Pull Development into your branch, open VScode & deal with the conflicts there.

```
git pull origin Development
code .
```
### 7. Vscode

* Files marked C = Conflict
* Files marked M = Modified
* <<<<< Head  = This is you! Current changes, you are HEAD
* <<<<<< Incoming change = pulled in from the Development branch

### 8. Any conflicts or changes need to be saved, added, & committed again

```
git add .
git commit -m “mergeTime”
git push origin myBranch
```

### FUNCTIONALITY CHECKLIST TO CHECK BEFORE YOU MERGE YOUR BRANCH: 

- [ ] When I'm signed out I should be able to go to the homepage, search for a plant, and only see the 'more info' button and then sign in, sign up & home nav links
- [ ] Once I click more info on a plant I should then see it's individual profile & the 'add plant to profile' button, which once clicked will take me to the sign up page
- [ ] I should be able to sign up / sign in. Once signed in I should be able to go to the home page and see the 'more info' and 'add a plant' buttons, if I click to 'add a plant' I should be automatically taken to my saved plants profile page, and from here I should see the option to 'remove' any plants I've added and also the option to search for a plant within my plant list
- [ ] Once signed in I should also be able to click the 'Add Plant' nav button and this will show me a pop up Modal, where I can choose from 3 options - all of these options should be working

### 9. Github - create pull request

* Create pull request from mybranch to Development (on github)
* Tell the git keeper, they will merge the pull request and there should be 0 conflicts as you have already resolved these in your branch.

### Create a new branch with a new name
```
git checkout -b feature/myNextFeature  
code .  
```
### 10. GitKeeper - merge the request

* Merge the pull request on Github only if there are 0 conflicts, then delete the branch.

### 11. Everyone else now needs to pull from Development & update their modules
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

### Update 

run this in the terminal for auth:

```
 cp .env.example .env
```
once your database has first been populated, you can now use this shortcut
to delete the sql file, run migrations and run seed sequentially
```
npm run db-reset
```
## magical git witch shortcut to push your branch --> your branch

```
make pushbranch m='commitMessage'
```
