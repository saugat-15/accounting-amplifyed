# Small Finance Institution Accounting Application

This is a simple accounting application designed for small financial institutions to efficiently track customer deposits, withdrawals, and other transactions. The application is built using modern technologies to ensure scalability, security, and performance.

## Features
- **Customer Management**: Create, read, update, and delete customer records.
- **Transaction Tracking**: Record customer deposits, withdrawals, and various other transactions.
- **Basic Reporting**: View a list of transactions per customer.

## Tech Stack
- **Frontend**: Next.js with TypeScript for type-safe, server-side rendering and client-side interactivity.
- **Authentication**: AWS Cognito for user authentication and secure access.
- **GraphQL API**: AWS AppSync to power real-time data queries and mutations.
- **API Management**: AWS API Gateway to handle REST APIs and manage traffic.
- **Database**: Amazon DynamoDB for fast and scalable NoSQL database solutions.
- **Hosting & Deployment**: AWS Amplify for hosting and continuous integration/continuous deployment (CI/CD).

## Current Status
The application is currently in its initial stages with basic CRUD functionalities implemented:
- Add, view, edit, and delete customer records.
- Add, view, and delete transaction records (deposits, withdrawals).

## Upcoming Features
- **Role-based Access Control**: Implement role-based access for staff, admins, and customers.
- **Transaction Categorization**: Add categories for different types of transactions (e.g., savings, loan payments).
- **Detailed Reporting**: Provide more in-depth transaction reports and analysis.
- **Notification System**: Notify customers via email for each transaction.
- **Mobile Support**: Optimize for mobile usage.
- **Export to CSV**: Allow users to export transaction data to CSV format.
- **Multi-language Support**: Add support for multiple languages.
- **Analytics Dashboard**: Integrate a visual dashboard to view trends in deposits, withdrawals, and balances over time.

## Getting Started

### Prerequisites
- Node.js (>= 14.x)
- AWS CLI configured

### Installation

Clone the repository:

```bash
git clone https://github.com/your-repo/accounting-app.git
cd accounting-app
