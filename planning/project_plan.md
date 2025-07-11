# Project Plan

Pod Members: **Luis-Angel Moreno, Heiryn Hernandez Rojas, Joanna Echeverri Porras**

## Problem Statement and Description

Many Spanish-speaking beginners interested in learning how to code struggle to find accessible, high-quality educational resources in their native language. Most tutorials, documentation, and coding platforms are primarily in English, creating a language barrier that makes it harder for them to enter or feel confident in the tech field. This lack of native-language resources can hinder their progress, reinforce inequalities, and prevent talented individuals from pursuing careers in technology.

## User Roles

"Learner": a spanish-speaking user who is a beginner in tech

## User Personas

- Maria is an 18-year-old student from El Salvador who recently moved to the U.S. Spanish is her first language, and she’s still getting comfortable with English, especially when it comes to technical terms. She’s curious about coding and wants to explore computer science, but finds most tutorials too hard to follow. She mainly uses her phone to access learning resources and would benefit from short, clear explanations in Spanish. She wants a site that feels approachable and meets her where she’s at.
- Jose is a 30-year-old from Miami with a background in retail. He’s fluent in Spanish and has basic knowledge of Python from online courses. He’s looking to switch into tech but struggles with confidence and understanding English-based documentation. He typically uses a laptop and studies in the evenings. He needs a tool that gives clear, Spanish-language support and tracks his learning progress so he can stay motivated and build toward a real career shift.

    
## User Stories

1. As a learner, I want to be able to run my code in an IDE, so that I can quickly test what I’m learning and see its output.
2. As a learner, I want to select the programming language for my code, so it's correctly interpreted.
3. As a learner, I want to see a panel for explanations of my code so that I can learn through feedback.
4. As a learner, I want to create a profile so that I can save my code, progress, and settings.
5. As a learner, I want to log in securely, so my information is accessible only to me.
6. As a learner, I want to be able to edit or delete my user account as I please, so I have control over my information and account.
7. As a learner, I want the website to be responsive on any device, so I can learn comfortably.
8. As a learner, I want explanations tailored to my profile, so they are more relevant to my skill level.
9. As a learner, I want to be able to change the language of both the website and the code explanations, so it is more personalized to my needs.
10. As a learner, I want to be able to search up any technical term, so I see its translation, meaning, and usage.
11. As a learner, I want access to all key technical terms, so I can scroll through and learn new terms and topics.
12. As a learner, I want to see my past code submissions and explanations, so I can continue and build upon what I was doing before.

## Pages/Screens
Landing/Home Page:
<img width="358" height="493" alt="Screenshot 2025-07-11 at 4 08 26 PM" src="https://github.com/user-attachments/assets/0b8681a8-190f-4356-b3c4-e5c09e831255" />

Product Page:
<img width="647" height="587" alt="Screenshot 2025-07-07 at 3 22 44 PM" src="https://github.com/user-attachments/assets/adb8af83-d309-44a0-a223-eb411e5e0cc1" />

Glossary Page:
<img width="358" height="322" alt="Screenshot 2025-07-11 at 4 08 35 PM" src="https://github.com/user-attachments/assets/84f7ac4e-af5a-4c29-be2e-bfe47f4a81d1" />

[Wireframe Website](https://www.canva.com/design/DAGsgNzgfro/COHOe_QXnHUxF3VL8MaUjA/edit?utm_content=DAGsgNzgfro&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Data Model

<img width="742" height="695" alt="Screenshot 2025-07-11 at 1 15 09 PM" src="https://github.com/user-attachments/assets/644de804-71e4-44a6-9acf-a6c3ad3b01b9" />


## Endpoints

User Endpoints
| CRUD Operation | HTTP Method | Description                                | User Stories |
| -------------- | ----------- | ------------------------------------------ | ------------ |
| READ           | GET         | Gets a user’s information                  | 5            |
| CREATE         | POST        | Creates a new user profile                 | 4            |
| UPDATE         | PUT         | Changes profile info                       | 6            |
| DELETE         | DELETE      | Deletes existing user                      | 6            |
| READ           | GET         | Gets user interactions within a time frame | 12           |


Glossary Endpoints
| CRUD Operation | HTTP Method | Description                            | User Stories |
| -------------- | ----------- | -------------------------------------- | ------------ |
| READ           | GET         | Gets all available terms               | 10           |
| READ           | GET         | Gets all terms that contain the search | 10           |
| READ           | GET         | Gets all info of a single term         | 11           |


Judge0
| CRUD Operation | HTTP Method | Description         | User Stories |
| -------------- | ----------- | ------------------- | ------------ |
| CREATE         | POST        | Executes given code | 1, 2, 3      |


Gemini Endpoints
| CRUD Operation | HTTP Method | Description                                           | User Stories |
| -------------- | ----------- | ----------------------------------------------------- | ------------ |
| CREATE         | POST        | Generates explanation for code                        | 2, 3, 9, 10  |
| CREATE         | POST        | Generates summary of progress given past interactions | 12           |


## Sprint Planning

[Trello Planning](https://trello.com/invite/b/6862d12ec3132ccb4eae3e9a/ATTI076a26513801733a830b02f9b9df7be7F991A33B/codifica)


***Don't forget to set up your Issues, Milestones, and Project Board!***
