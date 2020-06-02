# resume

>data.json 작성 요령
>1. 날짜 관련
>    - date format : YYYY-MM-DD, YYYY-MM
>    - datetime format : YYYY-MM-DD YYYY-MM-DD hh:mm:ss
>2. string
>    - 순수 string 혹은 array`<string>`로 데이터 입력 가능
>    - string : 
>    - array : 연속된 배열로 이어진 string을 join시킴
>3. 새로운 줄 : \n
>4. icon
>   - icon string 타입으로 필드에 작성
>   - icon list
>       - github
>       - tistory
>       - facebook
>       - twitter
>       - line
>       - linkedin
>       - rocketpunch
>       - bitbucket
>       - gitlab
>5. 문자열에 효과주기
>   - 굵은 글씨 : \`문자열\`

{
    "header": {
        "title": "풀스택 개발자 김호진 이력서",
        "name": "김호진",
        "email": "n4oahdev@gmail.com",
        "telNumber": "010-8191-9799",
        "birthday": "1999-03-24",
        "resumePhoto": "/img/resume-photo.jpg",
        "job": "Web Full-Stack Developer",
        "gender": true
    },
    "introduce": {
        "simpleIntroduce": [
            "배움에는 끝이 없다고 생각하는 실무 경력 1년차 개발자입니다. ",
            "중학교 시절 나만의 게임을 만들어보자는 생각으로 개발을 시작하여 프로그래머라는 꿈을 갖게되었고, ",
            "고등학교를 졸업한 뒤 IT 산업기능요원으로 `Java, Elasticsearch, Spring Boot",
            "Restful-API, VueJs, CentOS`등을 사용하여 솔루션 개발 및 시스템 엔지니어 업무를 맡고있습니다."
        ],
        "viewMore": [
            "중/고등학교 게임 개발을 하였을 때 인터넷에서 알게된 지인들과 팀을 만들어 게임 개발을 하였습니다. ",
            "팀 내에 개발자들이 여럿있었기 때문에 깔끔한 코딩 스탠다드의 중요성을 알게되었습니다. ",
            "게임이 온라인 게임이었다보니 게이머들의 피드백도 받으며 기능 구현을 하였습니다. ",
            "당시에는 영어로 된 코드 몇 줄로 원하는 기능이 모니터상에서 실행되는게 신기하였고, 내 게임을 다른사람이 즐기는것에 대해 성취감을 얻어 개발자의 꿈을 갖게되었습니다. ",
            "최근에는 웹 풀스택 개발자로서 개인 정보 접속기록 관리 솔루션 업체에 산업기능요원으로 근무중이며, ",
            "웹 개발에 대한 최신 기술들을 계속해서 학습중에 있습니다."
        ]
    },
    "social": {
        "github": "redirect|_blank|https://github.com/n4oah",
        "tistory": "redirect|_blank|https://n4oah.tistory.com"
    },
    "skills": [
        {
            "name": "Languege",
            "skill": [
                {
                    "name": "Java",
                    "level": "8"
                },
                {
                    "name": "Kotlin",
                    "level": "7"
                },
                {
                    "name": "C#",
                    "level": "6"
                },
                {
                    "name": "Python",
                    "level": "5"
                },
                {
                    "name": "Pawn",
                    "level": "9"
                },
                {
                    "name": "Javascript/Typescript",
                    "level": "6"
                },
                {
                    "name": "Go",
                    "level": "2"
                },
                {
                    "name": "Rust",
                    "level": "3"
                }
            ]
        },
        {
            "name": "Framework/API",
            "skill": [
                {
                    "name": "Spring MVC/Spring Boot",
                    "level": "8"
                },
                {
                    "name": "VueJs/NuxtJs",
                    "level": "7"
                },
                {
                    "name": "JQuery",
                    "level": "8"
                }
            ]
        },
        {
            "name": "Database",
            "skill": [
                {
                    "name": "MySQL",
                    "level": "6"
                },
                {
                    "name": "OracleDB",
                    "level": "4"
                },
                {
                    "name": "PostgreSQL",
                    "level": "5"
                },
                {
                    "name": "Elasticsearch",
                    "level": "3"
                }
            ]
        },
        {
            "name": "Etc",
            "skill": [
                {
                    "name": "Linux",
                    "level": "4"
                },
                {
                    "name": "Git",
                    "level": "3"
                },
                {
                    "name": "RESTFul-API",
                    "level": "7"
                }
            ]
                
        }
    ],
    "career": [
        {
            "companyName": "플레이오토",
            "startDate": "2019-11-19",
            "endDate": "",
            "inProgress": true,
            "skills": [
                "Angular", "Notion", "Github"
            ],
            "content": [
                "쇼핑몰 통합관리"
            ]
        },
        {
            "companyName": "위즈코리아",
            "startDate": "2018-06-25",
            "endDate": "2019-11-18",
            "inProgress": false,
            "skills": [
                "Java", "Spring", "Spring Boot", "ELK Stack", "Mybatis", "postgreSQL",
                "VueJS", "jQuery", "Python3", "webpack", "SVN", "RESTFul-API", "CentOS"
            ],
            "content": [
                "개인 정보 접속 관리 솔루션 개발 및 유지보수",
                "고객사 Linux환경 인프라 구축 및 유지보수"
            ]
        }
    ],
    "project": [
        {
            "title": "프로젝트 제목",
            "content": [
                "프로젝트 내용"
            ],
            "organization": "진행 기관",
            "downloadFile": "redirect|_blank|https://github.com/n4oah/resume",
            "startDate": "2019-05",
            "endDate": "",
            "inProgress": true,
            "description": [
                "Vue.Js/Vue-router/Vue-loader", "webpack/webpack-dev-server", "babel", "git"
            ]
        }
    ],
    "education": [
        {
            "name": "학습기관",
            "content": "학습내용",
            "startDate": "시작일",
            "endDate": "종료일",
            "inProgress": false // 진행 여부 true/false
        }
    ],
    "certificate": [
        {
            "name": "자격증 이름",
            "acquisitionData": "자격증 취득일",
            "agencyIssuing": "자격증 발행 기관",
            "grant": "점수/등급/합격여부"
        }
    ]
}

