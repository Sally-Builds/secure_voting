// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Evote {
    address admin;

    struct Candidate {
        string name;
        string manifesto;
        uint32 voteCount;
        bytes32 candidateID;
        bytes32 electionID;
    }

    struct Voter {
        address voter;
        bytes32 vote_forID;
        bytes32 electionID;
    }

    struct Election {
        string position;
        uint startDate;
        uint endDate;
        bytes32 electionID;
    }

    Election[] elections;
    //electionId => candidate[]
    mapping(bytes32 => Candidate[]) candidates;
    //electionId => Voter[]
    mapping(bytes32 => Voter[]) voters;

    constructor() {
        admin = msg.sender;
        _createElectionHandler();
        _createCandidateHandler();
        _createCandidateHandler2();
        _createCandidateHandler3();
    }

    /**
     *   createElection
     */
    function createElection(
        string memory _position,
        uint _startDate,
        uint _endDate
    ) public returns (Election memory) {
        Election memory _election;
        uint time = block.timestamp;

        _election.position = _position;
        _election.startDate = _startDate != 0
            ? time + _startDate * 1 days
            : time;
        _election.endDate = time + _endDate * 1 days;
        _election.electionID = keccak256(
            abi.encode(_position, _startDate, _endDate)
        );

        elections.push(_election);

        return (_election);
    }

    function createCandidate(
        bytes32 electionId,
        string memory name,
        string memory manifesto
    ) public returns (Candidate memory) {
        Candidate memory _candidate;

        _candidate.electionID = electionId;
        _candidate.name = name;
        _candidate.manifesto = manifesto;
        _candidate.voteCount = 0;
        _candidate.candidateID = keccak256(
            abi.encode(name, manifesto, electionId)
        );

        candidates[electionId].push(_candidate);

        return (_candidate);
    }

    function getElections() public view returns (Election[] memory) {
        return elections;
    }

    function vote(
        bytes32 _electionID,
        bytes32 _candidateID
    ) public returns (Voter memory) {
        Voter memory _voter;
        Candidate[] storage _candidates = candidates[_electionID];

        _voter.voter = msg.sender;
        _voter.electionID = _electionID;
        _voter.vote_forID = _candidateID;

        //add vote to candidate
        if (_candidates.length <= 0) {
            revert();
        }

        if (hasVoted(_electionID, msg.sender)) {
            revert("You have already cast your vote");
        }

        for (uint8 i = 0; i < _candidates.length; i++) {
            if (_candidates[i].candidateID == _candidateID) {
                _candidates[i].voteCount++;
            }
        }

        voters[_electionID].push(_voter);
        return _voter;
    }

    function hasVoted(
        bytes32 _electionID,
        address _voterAddress
    ) private view returns (bool) {
        for (uint8 i = 0; i < voters[_electionID].length; i++) {
            if (voters[_electionID][i].voter == _voterAddress) {
                return true;
            }
        }
        return false;
    }

    function getCandidates(
        bytes32 _electionID
    ) public view returns (Candidate[] memory) {
        if (candidates[_electionID].length == 0) {
            revert("election Id not correct");
        }
        return candidates[_electionID];
    }

    function changeAdmin(address _newAdmin) public {
        if (msg.sender != admin) {
            revert("You are an Intruder");
        }
        admin = _newAdmin;
    }

    function _createElectionHandler() private {
        Election memory election_one;

        election_one.position = "President";
        election_one.startDate = 0;
        election_one.endDate = 3;

        Election memory election_two;

        election_two.position = "senate";
        election_two.startDate = 0;
        election_two.endDate = 6;

        Election memory election_three;

        election_three.position = "Governor";
        election_three.startDate = 2;
        election_three.endDate = 5;

        createElection(
            election_one.position,
            election_one.startDate,
            election_one.endDate
        );
        createElection(
            election_two.position,
            election_two.startDate,
            election_two.endDate
        );
        createElection(
            election_three.position,
            election_three.startDate,
            election_three.endDate
        );
    }

    function _createCandidateHandler() private {
        Candidate memory candidate_one;

        candidate_one.electionID = elections[0].electionID;
        candidate_one.name = "Peter Obi";
        candidate_one.manifesto = "From Consumption to Production";

        Candidate memory candidate_two;

        candidate_two.electionID = elections[0].electionID;
        candidate_two.name = "Tinubu Bola";
        candidate_two.manifesto = "Emilokan";

        Candidate memory candidate_three;

        candidate_three.electionID = elections[0].electionID;
        candidate_three.name = "Atiku Abubakar";
        candidate_three.manifesto = "Power belongs to the North";

        createCandidate(
            candidate_one.electionID,
            candidate_one.name,
            candidate_one.manifesto
        );
        createCandidate(
            candidate_one.electionID,
            candidate_two.name,
            candidate_two.manifesto
        );
        createCandidate(
            candidate_one.electionID,
            candidate_three.name,
            candidate_three.manifesto
        );
    }

    function _createCandidateHandler2() private {
        Candidate memory candidate_one;

        candidate_one.electionID = elections[1].electionID;
        candidate_one.name = "Ike Ekweremandu";
        candidate_one.manifesto = "Obu nke anyi!!";

        Candidate memory candidate_two;

        candidate_two.electionID = elections[1].electionID;
        candidate_two.name = "Diana Willson";
        candidate_two.manifesto = "The game changer";

        Candidate memory candidate_three;

        candidate_three.electionID = elections[1].electionID;
        candidate_three.name = "Lawal Abdul";
        candidate_three.manifesto = "Equality";

        createCandidate(
            candidate_one.electionID,
            candidate_one.name,
            candidate_one.manifesto
        );
        createCandidate(
            candidate_one.electionID,
            candidate_two.name,
            candidate_two.manifesto
        );
        createCandidate(
            candidate_one.electionID,
            candidate_three.name,
            candidate_three.manifesto
        );
    }

    function _createCandidateHandler3() private {
        Candidate memory candidate_one;

        candidate_one.electionID = elections[2].electionID;
        candidate_one.name = "Sunday Mbah";
        candidate_one.manifesto = "Enugu will have water in 120 days!!!";

        Candidate memory candidate_two;

        candidate_two.electionID = elections[2].electionID;
        candidate_two.name = "Chijioke Edeoga";
        candidate_two.manifesto = "Eluppe";

        Candidate memory candidate_three;

        candidate_three.electionID = elections[2].electionID;
        candidate_three.name = "Frank Nweke";
        candidate_three.manifesto = "Enugu is in our hands";

        createCandidate(
            candidate_one.electionID,
            candidate_one.name,
            candidate_one.manifesto
        );
        createCandidate(
            candidate_one.electionID,
            candidate_two.name,
            candidate_two.manifesto
        );
        createCandidate(
            candidate_one.electionID,
            candidate_three.name,
            candidate_three.manifesto
        );
    }
}
