# NodeJS와 GraphQL로 만드는 BackEnd

graphql-yoga
쉽게 설치하는데 중점을 둔 완전한 기능을 갖춘 GraphQL 서버

GraphQL의 장점

1.  Over-fetching
    - 정보의 한가지 요소만 원할 경우에도 DataBase의 정보 하나 전체를 가져와야 하고, 그것은 매우 비효율적이다. 내가 요청한 영역의 정보보다 많은 정보를 서버에서 받아옴
    - 개발자가 어떤 정보를 원하는 지에 대해 통제가 가능
2.  Under-fetching

    - REST에서 하나를 완성하려고 많은 소스를 요청하는 것

3.  Resolver
    - query를 해결하는 resolver
    - 다른 API에 갈 수도 있고 Db에 갈수도 있다.

- Graph QL에서는 URL이 존재하지 않는다. 하나의 endpoint만 존재
- 하나의 Query로 만들고 Database에 요청하고 내가원하는 정보를 가져 올 수 있다.

PlayGround
graphql-yoga에 따라오며 Databae 테스트를 진행 할 수 있음(PostMan이랑 비슷)

Mutation은 DB가 변경될 떄 사용

node-fetch를 통해 node.js에서 fetch를 이용
