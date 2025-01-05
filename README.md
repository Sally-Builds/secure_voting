<div align="center">
<h1>Blockchain Voting Application</h1>
</div>

**Project Overview:**
This is a blockchain-based voting system designed to ensure secure, transparent, and tamper-proof elections. The application enables administrators to create elections, manage candidates, and oversee the voting process, while users can cast their votes securely during the election period. Built on the Ethereum blockchain, it leverages smart contracts for transparency and ensures that all actions are immutably recorded on the blockchain.

**Year Developed:** 2023

**Key Features:**

Admin Functionality:

Create elections and specify candidates.
Set the start and end times for each election.
Transfer ownership of the admin role to another blockchain address for flexibility.
Voting System:

Registered users can vote for candidates during the active election period.
Each voter is restricted to one vote per election, enforced by the smart contract.
Transparency and Security:

All actions, including election creation and voting, are logged immutably on the Ethereum blockchain.
Results are automatically calculated and displayed transparently after the election ends.
Smart Contract Functionality:

Admin address is set during contract deployment, granting exclusive control over election management.
Ownership transfer ensures continued application governance if the admin changes.

**Technologies Used:**

**Frontend:** ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Smart Contracts:** ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)

**Blockchain Network:** ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)

**Blockchain Framework:** Truffle.js

**Wallet Integration:** MetaMask

**Website/GitHub Link:** [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sally-Builds/secure_voting)

## Running the project

NB: before running these command make sure you have NODE.Js ^16.4.2 installed on you computer and also make sure npm is installed

1)	run the command – npm install -g truffle
2)	verify that the truffle installed by running this command – truffle version
3)	Download ganache from https://trufflesuite.com/ganache/
4)	Install Metamask extension in your browser(chrome)
5)	Setup metamask and ganache - https://www.geeksforgeeks.org/how-to-set-up-ganche-with-metamask/#:~:text=Ganache%20CLI,on%20the%20ganache%20blockchain%20successfully
	Tip: Try to add 2 accounts to the metamask so that one can be an admin while the other will be a regular user.
6)	Open the 2-deploy.js file.
7)	open command prompt
8)	cd into the project directory
9) 	run the command – truffle deploy
10) copy the contract address from ganache
12)	run npm install
13)	run the command to start the project – npm run start
