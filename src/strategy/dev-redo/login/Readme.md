# 전략 패턴 예제 - 로그인

안녕하세요! 이번 주차는 전략 패턴에 대해 공부를 했는데요!

이번 과제를 하면서 전략 패턴을 어떤 식으로 프론트에서 사용할 수 있을지 궁금해 구글에서 다양한 예시를 찾아봤습니다!
찾아보니 로그인 구현할 때 전략 패턴을 이용하는 방식이 나와 있었는데요!

로그인 구현 방법을 보면서 `구성으로 행동을 정의하는 객체를 (클라이언트에서) 유연하게 바꾸는` 전략 패턴의 정의에 대해 잘 이해를 하게 된 것 같아 소개를 하고 싶어서 코드를 가져왔습니다!

링크 :>> [전략 패턴을 이용한 로그인 구현](https://javascript.plainenglish.io/design-patterns-strategy-pattern-in-typescript-54eda9b40f09)

<br />

## 전략 패턴 사용 이유 :>> 여러 로그인 방법 "추가 & 수정"의 어려움

![image](https://user-images.githubusercontent.com/69149030/204088551-ea0d9d74-7534-4b4f-a1b6-ef81ba8f936d.png)

다양한 로그인 방법을 구현한다고 생각해보자.

아래와 같이 구현을 하면 어떨까?

```js
function login(mode) {
  if (mode === 'account') {
    loginWithPassword();
  } else if (mode === 'email') {
    loginWithEmail();
  } else if (mode === 'mobile') {
    loginWithMobile();
  } else if (mode === 'google') {
    loginWithGoogle();
  } else if (mode === 'facebook') {
    loginWithFacebook();
  } else if (mode === 'apple') {
    loginWithApple();
  } else if (mode === 'twitter') {
    loginWithTwitter();
  }
}
```

위의 방식은 추후 로그인 방법을 계속 추가하거나 수정하면 로그인 기능을 유지하기가 점점 더 어려워지게 됩니다. <br />
그 이유는 모드에 따라 다른 메소드를 호출하기 때문입니다.

반면 전략 패턴을 이용할 시, 원하는 로그인 방식 버튼을 클릭 시 `mode`와 각 로그인 방법에서 필요한 `인자`들을 전달해주는 식으로 구현할 수 있기 때문에 코드가 클린해지게 됩니다.

<br />

## 전략 패턴을 이용한 로그인 방식

![image](https://user-images.githubusercontent.com/69149030/204088785-4f97326d-855d-4fd7-b05a-9fe0cbc6fd60.png)

1. Context 객체인 Authenticator에게 전략 객체들인 트위터, 구글 등 로그인 객체를 지정해줍니다.
   이제 트위터, 구글 등 로그인 시 `모드`와 로그인 시 필요한 `인자(ex. access 토큰)`를 전달해주면 됩니다.

```js
const auth = new Authenticator();

auth.use('twitter', new TwitterStrategy());
auth.use('local', new LocalStrategy());
```

2. 각 로그인 버튼을 클릭 시 해당 로그인 모드와 인자를 전달해줌으로써 로그인을 할 수 있습니다.

```js
login('twitter', 'tw123'); // twitter = 모드, tw123 = accessToken
```
