TEMPLATE FOR RETROSPECTIVE (Team 11)
=====================================

The retrospective should include _at least_ the following
sections:

- [process measures](#process-measures)
- [quality measures](#quality-measures)
- [general assessment](#assessment)

## PROCESS MEASURES 

### Macro statistics

- Number of stories committed vs. done 
- Total points committed vs. done 
- Nr of hours planned vs. spent (as a team)

**Remember**a story is done ONLY if it fits the Definition of Done:
 
- Unit Tests passing
- Code review completed
- Code present on VCS
- End-to-End tests performed

> Please refine your DoD if required (you cannot remove items!) 

### Detailed statistics

| Story  | # Tasks | Points | Hours est. | Hours actual |
|--------|---------|--------|------------|--------------|
| _Uncategorized_   |    7     |       |      32h 20m      |       24h 27m       |
| n  1   |    7     |    8    |     19h 30m       |      17h 10m        |  
| n  2   |    5     |    13    |     10h 30m       |      8h 8m        |  

Story n2 cannot be considered done because end-to-end testing are missing

The difference between estimated and actual is due to issues using the YouTrack tool.
The actual hours spent (considering also the ones not registered in the tool) are: 

    - Uncategorized: +4h 20m --> 28h 47m

    - Story 1: +2h --> 19h 10m

    - Story 2: +30m --> 8h 38m

Story n1 has less story points BUT more hours est/act than story n2 because we included architectural tasks that should have been in uncategorized (code review: 6h/5h - database setup: 6h/8h)

> story `Uncategorized` is for technical tasks, leave out story points (not applicable in this case)

- Hours per task average, standard deviation (estimate and actual)

|            | Mean | StDev |
|------------|------|-------|
| Estimation |  3h 20m    |  3h 32m     | 
| Actual     |  2h 40m    |  2h 58m    |

- Total estimation error ratio: sum of total hours spent / sum of total hours effort - 1

    $$\frac{\sum_i spent_{task_i}}{\sum_i estimation_{task_i}} - 1$$
    
- Absolute relative task estimation error: sum( abs( spent-task-i / estimation-task-i - 1))/n

    $$\frac{1}{n}\sum_i^n \left| \frac{spent_{task_i}}{estimation_task_i}-1 \right| $$
  
## QUALITY MEASURES 

- Unit Testing:
  - Total hours estimated --> 3h
  - Total hours spent --> 3h
  - Nr of automated unit test cases --> 5
  - Coverage --> 75,6% Statements, 85,29% Branches, 63,15% Functions, 84,28% Lines
- E2E testing:
  - Total hours estimated --> 1h 30m
  - Total hours spent --> 1h
  - Nr of test cases --> 5
- Code review 
  - Total hours estimated --> 6h
  - Total hours spent --> 6h
  


## ASSESSMENT

- What did go wrong in the sprint?

Sprint planning and task assignment

- What caused your errors in estimation (if any)?

Lack of experience in this kind of team work

We assigned too many people for each task: 3 people can't work really well on a single task

- What lessons did you learn (both positive and negative) in this sprint?

Maybe it's better to assign just 1/2 people to smaller tasks

- Which improvement goals set in the previous retrospective were you able to achieve? 

No previous retrospective

- Which ones you were not able to achieve? Why?

No previous retrospective

- Improvement goals for the next sprint and how to achieve them (technical tasks, team coordination, etc.)

    > Improve in task division and task assignments
  
    > Use YouTrack more efficiently to correctly track the time
  
- One thing you are proud of as a Team!!

Everyone did its part and we (almost) finished the stories that we wanted to do (missing just one test)