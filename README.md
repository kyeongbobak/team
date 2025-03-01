# [team](https://team-tau-seven.vercel.app/)

### 개발 기간

---

2025년 1월 02일 ~ 2025년 2월 21일
<br/>

### 프로젝트 목적

---

- `Redux`와 `Recoil` 상태 관리 방식 비교하여 `Redux`가 실무에서 더 많이 사용되는 이유 분석
- `Next.js API Route`를 활용한 백엔드 구현(로그인, 회원가입, CRUD 기능)
- `Prisma`를 사용한 데이터베이스 모델링 설계와 관리
- `Supabase`를 활용한 데이터베이스 운영과 `Next.js` 연동 실습을 통해 사이트를 구현하는데 필요한 백엔드와 데이터 관리 기술을 경험
- `Tailwind CSS`를 활용한 UI 개발 경험을 바탕으로 기존 스타일링 방식과(Style Component, CSS Module) 비교하여 `Tailwind`가 많이 사용되는 이유 분석
- `TypeScript`를 활용한 코드의 타입을 명시하고, 코드 안전성을 확보함으로써 `Typescript`의 필요성을 경험

### 기술 스택

---

> ### Frontend

- **Framework : Next.js**
- **Language : Typescript**
- **State Management: Redux, Redux Toolkit, redux-persist**
- **Styling : Tailwind CSS, CSS Modules**
- **Responsive : React-Responsive (useMediaQuery hook)**

> ### Backend

- **API & Server : Next.js API Routes**
- **Database : Supabase**
- **ORM : Prisma**
- **Authentication : JWT(JSON Web Tokens), bcrypt**

> ### Development & Design

- **Libraries : ReactHookForm, Axios, Next Navigation, Prisma Client**
- **Design : Figma**
- **VersionControl : GitHub**

### 폴더구조

---

```
prisma
 ┣ migrations
 ┃ ┃ ┗ migration.sql
 ┃ ┗ migration_lock.toml
 ┗ schema.prisma
 public
 ┣ assets
 ┃ ┗ img
 ┗ webclip.png
 src
 ┣ app
 ┃ ┣ (main-layout)
 ┃ ┃ ┣ blog
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ post
 ┃ ┃ ┃ ┗ [id]
 ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ api
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┣ login
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┃ ┗ signup
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┣ post
 ┃ ┃ ┃ ┣ comments
 ┃ ┃ ┃ ┃ ┣ [commentId]
 ┃ ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┣ postdetail
 ┃ ┃ ┃ ┗ [id]
 ┃ ┃ ┃ ┃ ┗ route.tsx
 ┃ ┃ ┗ review
 ┃ ┃ ┃ ┗ route.tsx
 ┃ ┣ auth
 ┃ ┃ ┗ [actions]
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┣ layout.tsx
 ┃ ┗ providers.tsx
 ┣ components
 ┃ ┣ BlogFeed.tsx
 ┃ ┣ Footer.tsx
 ┃ ┣ Login.tsx
 ┃ ┣ PostDetail.tsx
 ┃ ┣ SignUp.tsx
 ┃ ┗ TopNavBar.tsx
 ┣ hook
 ┃ ┗ useGetCommentsList.ts
 ┣ lib
 ┃ ┗ prisma.ts
 ┣ redux
 ┃ ┣ slices
 ┃ ┃ ┗ authslice.tsx
 ┃ ┗ store.tsx
 ┣ styles
 ┃ ┣ footer.css
 ┃ ┣ globals.css
 ┃ ┣ home.css
 ┃ ┣ login.css
 ┃ ┣ postdetail.css
 ┃ ┣ signup.css
 ┃ ┣ topnavbar.css
 ┃ ┗ topnavbar.module.css
 ┗ utils
 ┃ ┣ server
 ┃ ┃ ┣ commentAccess.ts
 ┃ ┃ ┗ verifyToken.ts
 ┃ ┗ commonApi.ts
```

<br/>

### 기술 선택과 구현

---

**1. Redux vs Recoil 비교와 Redux 도입 이유**

이전 프로젝트에서는 `Recoil`을 사용했으나, 프로젝트 규모가 커지면서 다음과 같은 문제가 발생했습니다.

- **상태 중복과 충돌** : 쇼핑몰 프로젝트 개발 당시, 장바구니에 담긴 상품 수량을 표시할 때 `Recoil`은 개별 상태(atom) 단위로 관리되기 때문에, 여러 컴포넌트에서 장바구니 상태를 각각 관리하면서 상태 동기화가 원활하게 이루어지지 않는 문제가 발생했습니다.
  <br/>
- **상태 구조의 복잡성 증가** : `Recoil`은 프로젝트가 커지면서 하나의 컴포넌트가 상태를 업데이트 하면 다른 컴포넌트에서 그 상태를 처리하는 방식이 달라질 수 있어 복잡도가 증가하여 상태 흐름을 추적하기 어려웠습니다.

이후 이번 프로젝트에서 `Redux`를 도입하여 로그인/로그아웃 상태를 관리했으며, 이를 통해 `Redux`의 기본적인 동작 방식과 이점을 이해할 수 있었습니다.

`Redux`를 실제로 사용하면서 확인한 주요 특징은 다음과 같습니다.

- **중앙 집중식 상태 관리** : `Redux`는 `dispatch -> reducer -> store` 흐름을 통해 상태를 변경하고 `store` 에서 중앙 집중식으로 관리하기 때문에 상태의 일관성을 유지하며 여러 상태를 한곳에서 관리할 수 있어 상태 중복과 충돌을 방지할 수 있습니다. 또한 `CombineReducers`를 활용하면 여러 상태를 한 곳에 합쳐 관리할 수 있으며, `whitelist`와 같은 설정을 통해서 특정 상태만 저장할 수 있어 필요한 상태만 중앙 집중식으로 관리할 수 있다는 점에서 보다 체계적이고 일괄적인 관리를 가능하게 한다는 것을 경험하였습니다.
  <br/>
- **예측 가능한 상태 흐름과 확장성** : 명확한 액션 기반 상태 변경 방식으로 인해, 상태의 흐름을 추적하기 쉬었습니다.

이번 프로젝트는 규모가 크지 않았고, `Redux`의 다양한 기능들을 활용해보진 못했지만 더 큰 규모의 프로젝트에서는 상태 관리의 일관성이 더욱 중요해지기 때문에 `Redux`를 선택하는 것이 적합하다는 점을 확인할 수 있었습니다.

**2. Supabase 통한 데이터베이스 관리**

이전 프로젝트에서 `Firebase`를 사용했지만, 다음과 같은 한계가 있었습니다.

- `NoSQL` 구조로 인해 데이터 관계 정의가 어렵습니다.
- `Firebase`는 실시간 리스너를 통해 UI 업데이트를 직접 처리해야해서 이를 해결하기 위해 `Firebase Admin Sdk`를 사용하여 서버 환경에서 데이터를 변경하고 관리하는데 초기 설정과 인증 등 많은 작업이 요구됩니다.
- 초기 설정과 관리의 복잡합니다.

이후 이번 프로젝트에서 `Supabase`를 도입하여 다음과 같은 이점이 있었습니다.

- **관계형 데이터베이스** : `Post` 모델과 `Comment`모델 간의 외래 키 (Foreign Key) 관계를 명확하게 설정하고, `Cascade` 삭제 기능을 활용하여 `Post` 삭제 시 관련 `Comment`자동 삭제 기능을 구현할 수 있어 더 단순하게 관리할 수 있습니다.

  ```
  model Post {
  post_id         Int      @id @default(autoincrement())
  thumnail        String
  created_at      DateTime @db.Timestamp(6)
  writer          String   @default("")
  title           String   @default("")
  contents        String   @default("")
  contents_detail String   @default("")
  profile_image   String
  writer_info     String   @default("")

  comments Comment[]
  }
  ```

- **Prisma Client를 통한 데이터 관리 최적화** : `Supabase`는 추가 설정 없이 `Prisma Client`를 통해서 데이터베이스와의 연결을 유지하며 실시간으로 데이터를 읽어와 클라이언트에서 바로 반영할 수 있습니다.
  <br/>
- **설정 단순화** : `Firebase`는 `.env` 파일과 클라이언트/서버 각각 별도의 초기화 과정이 필요했지만, `Supabase`는 `DATABASE_URL`,`JWT_SECRET`만 설정하면 `Prisma Client`하나로 데이터베이스에 직접 연결해서 상호작용할 수 있어 설정이 훨씬 단순했습니다.

**3. Intersection Observer API를 활용한 스크롤 애니메이션 최적화**
<br/>
스크롤과 관련된 애니메이션을 처리할 때 기존의 방식인 이벤트 핸들러로 처리를 하게 되면, 페이지의 모든 컴포넌트에 스크롤 이벤트가 적용되어 성능에 부담을 주었습니다.

![스크롤 애니메이션](/public/gif/scrollanimation.gif)

```
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      { threshold: [0, 0.5, 1], rootMargin: "100px 0px" }
    );

    if (animationImageTopRef.current) observer.observe(animationImageTopRef.current);
    if (animationImageBottomRef.current) observer.observe(animationImageBottomRef.current);
    if (animationImageRef.current) observer.observe(animationImageRef.current);
  }, []);
```

- **성능 최적화** : `Intersection Observer API`를 사용하여 스크롤 이벤트가 발생할 때 특정 요소에만 이벤트를 적용함으로써 불필요한 리렌더링을 방지하고, 성능을 최적화할 수 있었습니다.
- **`threshold` 옵션을 통한 세밀한 조정** : `threshold` 값을 [0, 0.5, 1]로 설정하여 요소가 화면에 0%, 50%, 100% 보일 때 각각 애니메이션을 트리거하게 했습니다. 이를 통해 요소가 전부 보이기 전에 애니메이션을 시작하지 않게 하고, 일정 비율만큼 보일 때만 반응하도록 할 수 있어, 성능 부담을 더욱 줄이고 사용자 경험을 개선할 수 있었습니다. 예를 들어 50% 이상 화면에 보일 때만 애니메이션을 트리거하여 페이지 로딩 성능을 개선했습니다.

**4. JWT (JSON Web Tokens) 인증 사용**

`JWT(JSON Web Tokens)` 인증을 사용하여 로그인 기능을 구현했습니다. 세션 정보를 유지할 필요 없이 클라이언트 측에서 토큰 기반으로 인증을 처리할 수 있어 서버의 부하를 줄일 수 있고, 확장성 있는 시스템을 구축할 수 있어 선택하였습니다. 또한 실무에서도 이러한 방식으로 로그인 처리를 많이 진행할거라 생각하여 `JWT` 토큰을 통한 인증 처리를 실습해보았습니다.

**5. bcrypt 사용**

`API Routes`를 통해 로그인 백엔드 기능을 구현 시에 비밀번호의 노출을 방지하기 위해 `bcrypt`와 같은 암호화 라이브러리를 적용했습니다. 이를 통해서 로그인 시 비밀번호를 안전하게 암호화하여 저장하고, 인증 과정에서도 보호할 수 있도록 했습니다. `bcryptjs`를 선택하지 않고, `bcrypt`를 선택한 이유는 내부적으로 더 안전한 암호화 처리를 제공하고 보안성도 우수하기 때문입니다.

```
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user.password) {
      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });

      return NextResponse.json({ message: "Login successful (email only)", token }, { status: 200 });
    }

    if (password) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return NextResponse.json(
          { error: "Invalid password" },
          {
            status: 401,
          }
        );
      }
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json(
      { message: "Login successful", token },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

```

**6. Tailwind CSS의 @apply를 활용한 스타일 최적화**

유틸리티 클래스만으로는 반복되는 스타일이 많아져서 반복이 적고 변경 가능성이 낮은 스타일은 제외하고 중복되는 스타일에 한해 `@apply`를 사용하여 코드 가독성을 높이고, 재사용 가능한 클래스로 정리하였습니다.
<br/>

### 트러블 슈팅

---

#### 1. Prisma Client를 싱글턴 패턴으로 사용하여 개별적으로 생성하는 방식으로 수정

#### **문제 상황**

`Vercel`을 통한 애플리케이션을 배포한 후 `404 Not_Found` 오류가 발생하였고, `Vercel` 사이트 내에 `Deployment Summary`에서 `No framework detected` 라는 메시지가 표시되었습니다. 이것만으로는 오류 원인 분석이 어려워 다음과 같은 방식으로 오류 원인을 유추해보았습니다.

#### **해결 방법**

1. 별도의 깃헙 레포를 생성하여 동일한 `Vercel` 배포 과정을 수행
2. `package.json`과 기타 설정 파일을 비교하여 차이점 분석
3. `Node.js` 버전을 통일하여 재배포 진행
4. `Vercel` 사이트 내에 `Deployment Summary`에서 아래와 같은 에러 메세지가 확인

```
@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
```

5. 수정 사항 적용

- Prisma Client 인스턴스를 src/lib/prisma.ts 에서 다음과 같이 단일 관리하도록 수정

```
// src/lib/prisma.ts

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
```

- API Route에서 개별적으로 PrismaClient를 생성하는 방식에서 lib/prisma.ts에서 생성된 인스턴스를 가져와 사용하도록 변경

```
// src/api/review/route.tsx

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
```

`Next.js`의 핫 리로딩 (Hot Reloading) 기능으로 인해 서버가 재 시작될 때마다 새로운 `Prisma Client` 인스턴스가 생성되어 `Prisma`는 싱글턴 패턴을 사용해야 안정적으로 작동함을 인지하게 되었습니다.

#### 2. Server 폴더를 통해서 verifyToken 으로 댓글 수정, 삭제 공통 로직 분리

#### 문제 상황

- **JWT 인증 로직 중복 :**

  - 댓글 수정과 삭제 `API Route`에서 인증 로직이 중복되고 가독성이 떨어짐
  - `Middleware`를 통해 `JWT` 인증을 처리하려 했으나, 인증 결과를 `API Route`에서 확인하기 어려운 문제 발생
  - `Next.js`에서는 `middleware.ts`는 한번 정의되면 모든 요청을 무조건 거쳐야 하므로 특정 경로(matcher)에만 적용하려 해도 `middleware.ts`가 모든 요청에 대해 실행되기 때문에 인증이 필요한 요청에서 `401 Unauthorized` 오류가 발생
  - `Middleware`에서는 `headers` 객체가 읽기 전용이라 `request.headers`를 수정할 수 없어 인증 정보 전달이 어려움

#### 해결 방법

1. `Middleware` 파일 제거
2. 댓글 수정, 삭제 `API Route`의 `JWT` 인증 로직을 `verifyToken` 함수로 분리하여 재사용

- 브라우저 번들에 포함되지 않고 오직 서버에서만 동작하게 하는 `Server` 폴더를 생성하여, 그 안에 `VerifyToken.ts` 파일을 만들고 인증 로직을 구현하였습니다.
- `NextRequest`와 같은 서버 관련 객체를 사용하여 HTTP 요청 헤더에서 `Authorization` 토큰을 추출하고, 이를 `JWT` 검증하여 인증된 사용자의 이메일을 반환합니다.

3. 댓글 수정, 삭제 `API Route`에서 verifyToken 함수를 활용해 인증을 처리하도록 하였습니다.

```
const SECRET_KEY = process.env.JWT_SECRET!;


type VerifyTokenResponse = { error: string | null; email: string | null };

export function verifyToken(req: NextRequest): VerifyTokenResponse {
const authHeader = req.headers.get("Authorization");

if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return { error: "No token provided", email: null };
}

const token = authHeader.split(" ")[1];

try {
  const decoded = jwt.verify(token, SECRET_KEY) as { email: string };
  return { error: null, email: decoded.email };
  } catch (error) {
  console.error(error);
  return { error: "Unauthorized: Invalid token", email: null };
  }
}
```

4. 댓글 존재 여부 확인 로직 분리

- 댓글이 존재하는지 확인하는 로직도 `Server` 폴더 내에 별도의 함수로 분리하여 재사용성을 높입니다.

```
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CommentResponse = { error: string } | { email: string | null };

export async function getCommentById(commentId: string): Promise<CommentResponse> {
const existingComment = await prisma.comment.findUnique({
where: { id: commentId },
});

if (!existingComment) {
return { error: "Comment not found" };
}

return { email: existingComment.email };
}

```
