# RFC: Managing Chained Asynchronous Actions in User Service Schedule Feature

**Status:** Draft  
**Created:** 2023-08-16

## Abstract

This Request for Comments (RFC) addresses the challenges arising from chained asynchronous actions within the user service schedule feature. The current architecture employs RabbitMQ queues for handling data flow, including incoming schedule requests and interactions with third-party applications like HubSpot and Slack. However, the asynchronicity of these actions creates difficulties in ensuring data integrity when steps are interdependent. This RFC proposes solutions, including a memory cache mechanism, to manage chained actions and discusses potential design opportunities.

## 1. Introduction

The user service schedule feature uses RabbitMQ queues to manage the flow of data. Schedule requests from users are received through these queues and are then forwarded to other consumers to perform actions such as creating new contacts in HubSpot or sending messages to Slack. A significant challenge arises when certain actions depend on previous steps, requiring data synchronization across multiple asynchronous operations.

This RFC aims to explore design opportunities that can address the complexities of chained asynchronous actions in the user service schedule feature.

## 2. Problem Statement

The primary challenge lies in coordinating actions that depend on each other in an asynchronous environment. For instance, when creating a new deal based on a schedule request, data from Slack channels or HubSpot deal links may be required. However, as these actions occur within the same asynchronous event, there is no guaranteed order of execution, potentially leading to incomplete or inconsistent operations.

## 3. Proposed Solutions

### 3.1 Memory Cache Mechanism

One proposed solution involves implementing a memory cache within the user service. This cache would temporarily store event data and associated metadata, waiting until all necessary data is available before triggering the corresponding third-party actions. This approach ensures that each action is performed with complete and accurate information, eliminating data dependencies.

### 3.2 Dependency Tagging

To address the order of execution, a tagging mechanism can be introduced. Events and actions can be tagged with identifiers or timestamps, allowing the user service to prioritize actions that depend on previously generated data. This approach maintains the benefits of asynchronous processing while enabling sequential execution of dependent actions.

## 4. Design Opportunities

### 4.1 State Machine

Implementing a state machine can provide a structured way to manage the progression of chained actions. Each action can be associated with a specific state, and the state transitions can be managed based on the availability of required data. This approach enhances visibility and control over the entire process.

### 4.2 Event Sourcing

Event sourcing involves capturing all changes to an application's state as a sequence of events. By applying this approach, the user service can maintain a log of events, allowing for the reconstruction of data dependencies and ensuring that each action has the necessary context.

## 5. Conclusion

Chaining asynchronous actions within the user service schedule feature necessitates careful consideration to maintain data integrity and completeness. This RFC proposes solutions including a memory cache mechanism and dependency tagging, which can enable orderly execution of dependent actions. Additionally, design opportunities such as state machines and event sourcing offer potential frameworks for managing complex workflows.

## 6. Feedback and Collaboration

Stakeholders are encouraged to provide feedback on the proposed solutions and design opportunities. Collaboration among developers, system architects, and domain experts will be pivotal in refining and implementing the most suitable approach to addressing the challenges posed by chained asynchronous actions.

## 7. Next Steps

The next steps involve collaborative discussions to gather insights and feedback on the proposed solutions and design opportunities. Based on the collected feedback, an implementation plan can be developed, tested, and iterated upon to ensure a robust and effective solution.

## 8. References

- [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html)
- [State Machines](https://en.wikipedia.org/wiki/Finite-state_machine)
