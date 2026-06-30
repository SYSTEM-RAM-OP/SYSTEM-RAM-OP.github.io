(function (Scratch) {
    "use strict";
    const blockicon ="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNTcuMjI0OTUiIGhlaWdodD0iMzU2Ljk2Njk0IiB2aWV3Qm94PSIwLDAsMzU3LjIyNDk1LDM1Ni45NjY5NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIzMzguODIyNzQiIHkxPSIxMDMuMzc0OTEiIHgyPSI0OTIuNTM1NTEiIHkyPSIxMDMuMzc0OTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZDgxZTA2IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkODFlMDYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQ1LjE5MjQxIiB5MT0iMTg0LjAxMDczIiB4Mj0iMzgxLjUwODI0IiB5Mj0iMTg0LjAxMDczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2NhMTgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q4MWUwNiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzkuMzQxMTQsLTEuNTE2NTMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik00MTUuNjc5MTMsMTAzLjM3NDkxTTQxNS42NzkxMywyNi41MTg1M2M0Mi40NDY2LDAgNzYuODU2MzgsMzQuNDA5NzkgNzYuODU2MzgsNzYuODU2MzhjMCw0Mi40NDY2IC0zNC40MDk3OSw3Ni44NTYzOCAtNzYuODU2MzgsNzYuODU2MzhjLTQyLjQ0NjYsMCAtNzYuODU2MzYsLTM0LjQwOTc5IC03Ni44NTYzNiwtNzYuODU2MzhjMCwtNDIuNDQ2NiAzNC40MDk3NiwtNzYuODU2MzggNzYuODU2MzYsLTc2Ljg1NjM4eiIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNDgzLjAyNDM2LDI1MC40ODI4NGMtMC4wMTA4Miw1LjE0NTE1IC00LjE3OTExLDkuMzEzNDQgLTkuMzI0MjksOS4zMjQyOWgtNTYuMDA0NjJjLTUuMTQ4MzYsMC4wMjE2MSAtOS4zMTM1Myw0LjE5NTU1IC05LjMyNDI5LDkuMzQzOTRjMCw1LjE0OTY2IDQuMTc0NjMsOS4zMjQyOSA5LjMyNDI5LDkuMzI0MjloMTguNjY4MjNjNS4xNTI4NCwwLjAxMDg0IDkuMzI0MjgsNC4xOTEwOSA5LjMyNDI4LDkuMzQzOTNjLTAuMDEwODIsNS4xNDUxNSAtNC4xNzkxMSw5LjMxMzQ0IC05LjMyNDI4LDkuMzI0MjZoLTI0Ljc4NjAyYy01Mi4wNDQ2NSw0NC45NjE3OSAtMTI4LjA2MzksNDguNTczMjcgLTE4NC4xMzY1Nyw4Ljc0Nzg2Yy01Ni4wNzI2NywtMzkuODI1NDEgLTc3LjcwMjc0LC0xMTIuNzkxODkgLTUyLjM5MzA1LC0xNzYuNzQyMTJoLTE4LjY2ODJjLTQuOTg4NiwtMC4yMjkwOCAtOC45MTUzNCwtNC4zNDAyNSAtOC45MTUzNCwtOS4zMzQxMWMwLC00Ljk5Mzg2IDMuOTI2NzEsLTkuMTA1MDMgOC45MTUzNCwtOS4zMzQxMWgzNy4zNzU3N2M0LjY0MDIzLDAuMDAxNDEgOC41NzUzNSwtMy40MDk0NSA5LjIzMjk3LC04LjAwMjgzYzAuNjU3NjIsLTQuNTkzNDEgLTEuNjAxNDYsLTkuMjUxODIgLTYuMDU1NywtMTAuNTUyNDRsLTIxLjg4NDg1LC0wLjA5MzI2Yy0zLjQzNjk4LDAuMTU3ODUgLTYuNjgyNjQsLTEuNTg1OTEgLTguNDQ4MywtNC41Mzg5MWMtMS43NjU2NywtMi45NTI5OCAtMS43NjU2NywtNi42Mzc0MSAwLC05LjU5MDM5YzEuNzY1NjcsLTIuOTUyOTggNS4wMTEzMywtNC42OTY3MyA4LjQ0ODMsLTQuNTM4OTFoMzkuMDQ3ODZjNTEuODM3OCwtNDYuNjk2MDIgMTI5LjA5Njk2LC01MS4yODUzNiAxODYuMDk4NDIsLTExLjA1NDU5YzU3LjAwMTQzLDQwLjIzMDc2IDc4LjU1ODc0LDExNC41NjMzIDUxLjkyNjI0LDE3OS4wNDg4NWgyMS42Mzg1OGM1LjEyMjA5LDAuMDQzMTIgOS4yNTQ2Niw0LjIwMTk5IDkuMjY1MjYsOS4zMjQyNnoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iI2U2MzUyNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0zNDEuNzE0NjUsMTY0LjM3OTEzYy0wLjQ5MzEzLC0wLjEwNjg0IC0xLjAwNjY4LDAuMDQ1NjkgLTEuMzYxNDgsMC40MDQ1Yy0wLjM1NDc5LDAuMzU4ODEgLTAuNTAxNiwwLjg3NDAyIC0wLjM4OTI4LDEuMzY1OTRjMS4yMTk2Myw1LjY2NTQgMy4wMjkzOCwxNS43MzcxOSAzLjgzNTk0LDIzLjA3NDYyYzEuMzk2NjgsMTIuMzczMzUgLTEwLjk3NjY3LDIzLjk0MDE3IC0yMC41OTYwMywyNy4xODU5NmMtMTUuMTQ3MDQsNS4yMTI5NSAtMzIuNjE1MjgsLTcuMTgwMDggLTM2LjU0OTU3LC0yMS42Mzg2MWMtNC41MjQ0NCwtMTYuODk3NzkgNC44NTg4NywtMzcuNDkzOCAyMC40NzgwMSwtNDQuMjAxNzVjMS43MzEwOCwtMC44MDY1NSAzLjQ2MjE2LC0xLjQ5NTAzIDUuMjEyOTIsLTIuMzAxNTZjMy41ODAxOSwtMS42MzI3MyAxLjg0OTEzLC00LjI4ODQgMS4yNTg5OCwtNi43Mjc2NWMtMS42MTMwNSwtNi43MDc5NSAtMi41Mzc2NCwtMTMuNDE1OTMgMC45MjQ1NSwtMTkuNjcxNDVjNS4yMTI5MiwtOS4zODMyOSAxOC43NDY5LC0xNi43Nzk3NCAyOS4yNzExMiwtMTIuMjc0OTdjNC41ODE2NSwxLjgxMzA3IDkuMDMxNiwzLjk0MjczIDEzLjMxNzU4LDYuMzczNTVjMy42MDgyOCwyLjMyMTIzIDUuMjU3Nyw2Ljc0MTAyIDQuMDUyMzIsMTAuODU4NjVjLTIuMjAzMjEsNS45MDE0NSAtNy45ODY2Myw3LjI5ODEgLTE0LjEyNDEsMy43MTc4OWMtMi4xNjkzNiwtMS4zODU4MSAtNC40MDgyOCwtMi42NTk1NCAtNi43MDc5NSwtMy44MTYyN2MtMS45OTQ5MiwtMS4wNTg5OSAtNC40MDY1MywtMC45NTY0NiAtNi4zMDQ0MywwLjI2Nzk2Yy0xLjg5NzksMS4yMjQ0MiAtMi45ODUzMywzLjM3OTM5IC0yLjg0MjgxLDUuNjMzNDdjMC4xMDk3LDIuMzIxMDQgMC4zNTkzMyw0LjYzMzQgMC43NDc1Myw2LjkyNDM4YzAuNDUzMjMsMi43NzA4NyAyLjQ5NjQ0LDUuMDE0NTUgNS4yMTI5Miw1LjcyNDM5YzMuODQ1ODUsMC44NTAzOSA3LjYyMDcxLDEuOTk0NyAxMS4yOTE0MiwzLjQyMjg0YzE0LjkxMDk2LDYuNTg5OTMgMjUuNTcyOSwxNy4zNTAyNCAzMC41NDk3NywzMy40NDE0OWM5LjI0NTU5LDI5Ljg0MTU5IC04LjEwNDYzLDU5LjU4NDg3IC0zMy43OTU1Niw3MC45MzUyOGMtMTMuOTg5ODYsNi42MTE0NiAtMjkuNzc3NDUsOC4zOTYzNiAtNDQuODkwMjgsNS4wNzUyMmMtMjEuNTc3MTgsLTUuMTM1NiAtMzkuNTM2MDksLTIwLjAxODk3IC00OC41ODg0OSwtNDAuMjY3NDljLTYuOTQ0MDMsLTE1LjczNzE5IC04Ljc5MzE0LC0zMS44MDg3MyAtMy4zNjM4MiwtNDguODI0NTVjNy4yOTgxLC0yMi43NTk4NyAyMS44NzQ2NiwtMzguMjgwNjYgNDQuMDgzNzUsLTQ2LjgzNzc0YzQuMDE5MjEsLTEuNDY3MjUgOC41MTYwNCwwLjA5NDcyIDEwLjc2MDI5LDMuNzM3NmMxLjIxNTYyLDEuODA3NTQgMS42NTQ0NSw0LjAyNzU1IDEuMjE4MDIsNi4xNjE2OGMtMC40MzY0MywyLjEzNDEzIC0xLjcxMTYsNC4wMDM1OSAtMy41MzkyNiw1LjE4ODc2Yy0zLjE0MDc0LDEuOTE1MzMgLTYuMzg0OTIsMy42NTU2MyAtOS43MTc3MSw1LjIxMjk1Yy0xMi4yNTUzMyw2LjIzNTg1IC0xOS44ODc4NSwxNi40MjU3IC0yNC43NDY3LDI5LjE1MzEyYy05LjUwMTMxLDI0Ljc0NjcgMy41ODAyMSw1My40NDczNCAyNS4yMTg4LDY0LjY3OTczYzE5Ljg4NzgzLDEwLjQwNjE5IDQ3LjA5MzQ3LDYuMjM1ODUgNjEuNzg4MDUsLTEwLjg3ODMyYzguNzUyNjIsLTEwLjAwOSAxMi4wODQ2MSwtMjMuNjUyNDggOC45MzA4MywtMzYuNTY5MjVjLTEuOTY3MTQsLTkuODM1NzEgLTEzLjI1ODU2LC0yMi43Nzk1NCAtMjAuNjM1MzYsLTI0LjUzMDN6TTMyMS4xOTczMiwxNjYuNjgwNjljLTAuMTQzMzgsLTAuNjU3NDIgLTAuNTYwNDksLTEuMjIyNDIgLTEuMTQ2NTgsLTEuNTUzMDNjLTAuNTg2MDgsLTAuMzMwNjEgLTEuMjg1MzUsLTAuMzk1MzkgLTEuOTIyMTYsLTAuMTc4MDhjLTEyLjc4NjQ1LDQuNDA2NDIgLTE4LjI1NTEzLDE4LjE1Njc4IC0xMi4yNzUsMjkuMzY5NWMyLjI4MjkzLDQuMTA1NDIgNi45NjUyLDYuMjU1NDQgMTEuNTY2ODIsNS4zMTEyN2M1LjQ0OSwtMS42MTMwNSA5LjI2NTI3LC01LjU0NzM1IDguNDU4NzQsLTEwLjY0MjI0Yy0xLjE0MDk1LC03LjQ5NDgzIC0zLjA0OTA5LC0xNC45MTA5NiAtNC42ODE4MiwtMjIuMzA3NDR6IiBmaWxsPSJ1cmwoI2NvbG9yLTIpIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xMzkuMzQxMTQsMzU4LjQ4MzQ3di0zNTYuOTY2OTRoMzU3LjIyNDk1djM1Ni45NjY5NHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L3N2Zz4="
    const toolsicon ="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNTguNzIxMDMiIGhlaWdodD0iMzU4LjQ2MTkzIiB2aWV3Qm94PSIwLDAsMzU4LjcyMTAzLDM1OC40NjE5MyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIzMjEuMjEyNjIiIHkxPSIxMDIuOTgzNTUiIHgyPSI0NTkuMTM1ODYiIHkyPSIxMDIuOTgzNTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZDgxZTA2IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkODFlMDYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjM3LjIwMDA5IiB5MT0iMTc1LjMzNjM4IiB4Mj0iMzU5LjUxMzQyIiB5Mj0iMTc1LjMzNjM4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2NhMTgwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q4MWUwNiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzkuMjc1MjQsLTAuNzY5MDcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnPjxwYXRoIGQ9Ik0zOTAuMTc0MjUsMTAyLjk4MzU1TTM5MC4xNzQyNSwzNC4wMjE5NGMzOC4wODY0NCwwIDY4Ljk2MTYyLDMwLjg3NTE4IDY4Ljk2MTYyLDY4Ljk2MTYyYzAsMzguMDg2NDQgLTMwLjg3NTE4LDY4Ljk2MTYyIC02OC45NjE2Miw2OC45NjE2MmMtMzguMDg2NDQsMCAtNjguOTYxNiwtMzAuODc1MTggLTY4Ljk2MTYsLTY4Ljk2MTYyYzAsLTM4LjA4NjQ0IDMwLjg3NTE2LC02OC45NjE2MiA2OC45NjE2LC02OC45NjE2MnoiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQ1MC42MDE3MSwyMzQuOTgwNDFjLTAuMDA5NzEsNC42MTY2NCAtMy43NDk4Myw4LjM1Njc1IC04LjM2NjQ5LDguMzY2NDloLTUwLjI1MTc3Yy00LjYxOTUyLDAuMDE5MzkgLTguMzU2ODQsMy43NjQ1OCAtOC4zNjY0OSw4LjM4NDEyYzAsNC42MjA2OCAzLjc0NTgxLDguMzY2NDkgOC4zNjY0OSw4LjM2NjQ5aDE2Ljc1MDYxYzQuNjIzNTQsMC4wMDk3MyA4LjM2NjQ4LDMuNzYwNTggOC4zNjY0OCw4LjM4NDExYy0wLjAwOTcxLDQuNjE2NjQgLTMuNzQ5ODMsOC4zNTY3NSAtOC4zNjY0OCw4LjM2NjQ2aC0yMi4yMzk5OGMtNDYuNjk4NTcsNDAuMzQzMjcgLTExNC45MDkwNSw0My41ODM3OCAtMTY1LjIyMTg4LDcuODQ5MjdjLTUwLjMxMjgzLC0zNS43MzQ1MSAtNjkuNzIxMDQsLTEwMS4yMDU4IC00Ny4wMTExOSwtMTU4LjU4N2gtMTYuNzUwNThjLTQuNDc2MTcsLTAuMjA1NTUgLTcuOTk5NTUsLTMuODk0NDIgLTcuOTk5NTUsLTguMzc1M2MwLC00LjQ4MDg5IDMuNTIzMzUsLTguMTY5NzUgNy45OTk1NSwtOC4zNzUzaDMzLjUzNjQ5YzQuMTYzNTgsMC4wMDEyNyA3LjY5NDQ4LC0zLjA1OTIzIDguMjg0NTUsLTcuMTgwNzdjMC41OTAwNywtNC4xMjE1NyAtMS40MzY5NiwtOC4zMDE0NiAtNS40MzM2NSwtOS40Njg0OGwtMTkuNjM2ODIsLTAuMDgzNjhjLTMuMDgzOTMsMC4xNDE2NCAtNS45OTYxOSwtMS40MjMgLTcuNTgwNDgsLTQuMDcyNjdjLTEuNTg0MywtMi42NDk2NSAtMS41ODQzLC01Ljk1NTYxIDAsLTguNjA1MjZjMS41ODQzLC0yLjY0OTY1IDQuNDk2NTYsLTQuMjE0MjggNy41ODA0OCwtNC4wNzI2N2gzNS4wMzY4M2M0Ni41MTI5NywtNDEuODk5MzYgMTE1LjgzNiwtNDYuMDE3MjggMTY2Ljk4MjIxLC05LjkxOTA1YzUxLjE0NjE5LDM2LjA5ODIyIDcwLjQ4OTExLDEwMi43OTUyNSA0Ni41OTIzMywxNjAuNjU2NzhoMTkuNDE1ODRjNC41OTU5NCwwLjAzODY5IDguMzA0MDEsMy43NzAzNiA4LjMxMzUyLDguMzY2NDZ6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiNlNjM1MjQiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMzIzLjgwNzQ3LDE1Ny43MjEzNmMtMC40NDI0OCwtMC4wOTU4NyAtMC45MDMyNywwLjA0MSAtMS4yMjE2MywwLjM2Mjk1Yy0wLjMxODM1LDAuMzIxOTUgLTAuNDUwMDgsMC43ODQyNCAtMC4zNDkyOSwxLjIyNTYzYzEuMDk0MzUsNS4wODM0NCAyLjcxODIsMTQuMTIwNjUgMy40NDE5MSwyMC43MDQzN2MxLjI1MzIxLDExLjEwMjM1IC05Ljg0OTE0LDIxLjQ4MTAxIC0xOC40ODAzOSwyNC4zOTMzOWMtMTMuNTkxMTIsNC42Nzc0NyAtMjkuMjY1MDEsLTYuNDQyNTQgLTMyLjc5NTE2LC0xOS40MTU4N2MtNC4wNTk2OSwtMTUuMTYyMDMgNC4zNTk3NiwtMzMuNjQyNCAxOC4zNzQ0OSwtMzkuNjYxM2MxLjU1MzI2LC0wLjcyMzcgMy4xMDY1MiwtMS4zNDE0NiA0LjY3NzQ0LC0yLjA2NTE0YzMuMjEyNDMsLTEuNDY1MDEgMS42NTkxOSwtMy44NDc4OSAxLjEyOTY2LC02LjAzNjU4Yy0xLjQ0NzM2LC02LjAxODkgLTIuMjc2OTcsLTEyLjAzNzgzIDAuODI5NTgsLTE3LjY1MDc4YzQuNjc3NDQsLTguNDE5NDMgMTYuODIxMiwtMTUuMDU2MTEgMjYuMjY0MzYsLTExLjAxNDA3YzQuMTExMDIsMS42MjY4MyA4LjEwMzg3LDMuNTM3NzMgMTEuOTQ5NTksNS43MTg4NWMzLjIzNzYzLDIuMDgyNzkgNC43MTc2Miw2LjA0ODU4IDMuNjM2MDYsOS43NDMyNGMtMS45NzY4OSw1LjI5NTI1IC03LjE2NjI0LDYuNTQ4NDMgLTEyLjY3MzI2LDMuMzM1OThjLTEuOTQ2NTIsLTEuMjQzNDYgLTMuOTU1NDYsLTIuMzg2MzUgLTYuMDE4OSwtMy40MjQyNmMtMS43OSwtMC45NTAyMSAtMy45NTM4OSwtMC44NTgyMSAtNS42NTY4MywwLjI0MDQzYy0xLjcwMjk1LDEuMDk4NjUgLTIuNjc4NjcsMy4wMzIyNiAtMi41NTA3OSw1LjA1NDc5YzAuMDk4NDMsMi4wODI2MiAwLjMyMjQyLDQuMTU3NDUgMC42NzA3NCw2LjIxMzFjMC40MDY2NywyLjQ4NjI0IDIuMjQsNC40OTk0NSA0LjY3NzQ0LDUuMTM2MzhjMy40NTA4LDAuNzYzMDQgNi44Mzc5LDEuNzg5OCAxMC4xMzE1NSwzLjA3MTI0YzEzLjM3OTI5LDUuOTEzMDEgMjIuOTQ2MDMsMTUuNTY4MDEgMjcuNDExNjcsMzAuMDA2MzVjOC4yOTU4NywyNi43NzYyMyAtNy4yNzIxMSw1My40NjQyNSAtMzAuMzI0MDUsNjMuNjQ4NzRjLTEyLjU1MjgxLDUuOTMyMzIgLTI2LjcxODY4LDcuNTMzODggLTQwLjI3OTExLDQuNTUzODljLTE5LjM2MDc1LC00LjYwODA3IC0zNS40NzQ5LC0xNy45NjI2IC00My41OTc0MywtMzYuMTMxMTdjLTYuMjMwNzMsLTE0LjEyMDY1IC03Ljg4OTksLTI4LjU0MTMxIC0zLjAxODI5LC00My44MDkyNGM2LjU0ODQzLC0yMC40MjE5NSAxOS42Mjc2NywtMzQuMzQ4NDMgMzkuNTU1NDIsLTQyLjAyNjUyYzMuNjA2MzUsLTEuMzE2NTMgNy42NDEyNiwwLjA4NDk5IDkuNjU0OTgsMy4zNTM2N2MxLjA5MDc1LDEuNjIxODcgMS40ODQ1LDMuNjEzODQgMS4wOTI5LDUuNTI4NzVjLTAuMzkxNiwxLjkxNDkxIC0xLjUzNTc4LDMuNTkyMzQgLTMuMTc1Nyw0LjY1NTc3Yy0yLjgxODEyLDEuNzE4NTkgLTUuNzI5MDUsMy4yODAxMiAtOC43MTk1LDQuNjc3NDdjLTEwLjk5NjQ1LDUuNTk1MyAtMTcuODQ0OTUsMTQuNzM4NDQgLTIyLjIwNDcsMjYuMTU4NDhjLTguNTI1MzMsMjIuMjA0NyAzLjIxMjQ1LDQ3Ljk1NzE4IDIyLjYyODMsNTguMDM1NzdjMTcuODQ0OTMsOS4zMzcyNiA0Mi4yNTU5OCw1LjU5NTMgNTUuNDQxMTIsLTkuNzYwODljNy44NTM1NCwtOC45ODA4NyAxMC44NDMyNywtMjEuMjIyODcgOC4wMTM0NSwtMzIuODEyODJjLTEuNzY1MDcsLTguODI1MzggLTExLjg5NjYzLC0yMC40Mzk2IC0xOC41MTU2OCwtMjIuMDEwNTJ6TTMwNS4zOTc3LDE1OS43ODY1Yy0wLjEyODY1LC0wLjU4OTg5IC0wLjUwMjkyLC0xLjA5Njg1IC0xLjAyODgsLTEuMzkzNWMtMC41MjU4OCwtMC4yOTY2NSAtMS4xNTMzMiwtMC4zNTQ3OCAtMS43MjQ3MSwtMC4xNTk3OWMtMTEuNDczMDEsMy45NTM3OSAtMTYuMzc5OTUsMTYuMjkxNyAtMTEuMDE0MSwyNi4zNTI2NGMyLjA0ODQzLDMuNjgzNzEgNi4yNDk3Myw1LjYxMjg4IDEwLjM3ODY3LDQuNzY1NjljNC44ODkyNywtMS40NDczNiA4LjMxMzUzLC00Ljk3NzUyIDcuNTg5ODUsLTkuNTQ5MDZjLTEuMDIzNzUsLTYuNzI0OTUgLTIuNzM1ODgsLTEzLjM3OTI5IC00LjIwMDksLTIwLjAxNnoiIGZpbGw9InVybCgjY29sb3ItMikiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjxwYXRoIGQ9Ik0xMzkuMjc1MjQsMzU5LjIzMXYtMzU4LjQ2MTkzaDM1OC43MjEwM3YzNTguNDYxOTN6IiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik00ODkuMzIzNzMsMjkwLjM0NjU5Yy0wLjAwNDE4LDEuOTg3ODkgLTEuNjE0NjQsMy41OTgzNiAtMy42MDI1NSwzLjYwMjU1aC0yMS42MzgwNGMtMS45ODkxMywwLjAwODM1IC0zLjU5ODM5LDEuNjIxIC0zLjYwMjU1LDMuNjEwMTRjMCwxLjk4OTYzIDEuNjEyOTIsMy42MDI1NSAzLjYwMjU1LDMuNjAyNTVoNy4yMTI2OWMxLjk5MDg2LDAuMDA0MTkgMy42MDI1NCwxLjYxOTI3IDMuNjAyNTQsMy42MTAxNGMtMC4wMDQxOCwxLjk4Nzg5IC0xLjYxNDY0LDMuNTk4MzYgLTMuNjAyNTQsMy42MDI1NGgtOS41NzYzN2MtMjAuMTA4MDYsMTcuMzcxNTIgLTQ5LjQ3ODk5LDE4Ljc2Njg1IC03MS4xNDMzMiwzLjM3OTg0Yy0yMS42NjQzMywtMTUuMzg3MDEgLTMwLjAyMTM3LC00My41Nzg0NyAtMjAuMjQyNjcsLTY4LjI4NjM5aC03LjIxMjY4Yy0xLjkyNzQxLC0wLjA4ODUxIC0zLjQ0NDU1LC0xLjY3NjkxIC0zLjQ0NDU1LC0zLjYwNjM0YzAsLTEuOTI5NDQgMS41MTcxMywtMy41MTc4MyAzLjQ0NDU1LC0zLjYwNjM0aDE0LjQ0MDU2YzEuNzkyODEsMC4wMDA1NSAzLjMxMzE5LC0xLjMxNzI4IDMuNTY3MjcsLTMuMDkxOThjMC4yNTQwOCwtMS43NzQ3MiAtMC42MTg3NCwtMy41NzQ1NSAtMi4zMzk2OSwtNC4wNzcwNmwtOC40NTU0NywtMC4wMzYwM2MtMS4zMjc5MiwwLjA2MDk5IC0yLjU4MTkyLC0wLjYxMjczIC0zLjI2NDEsLTEuNzUzNjZjLTAuNjgyMTksLTEuMTQwOTIgLTAuNjgyMTksLTIuNTY0NDQgMCwtMy43MDUzNmMwLjY4MjE5LC0xLjE0MDkyIDEuOTM2MTgsLTEuODE0NjQgMy4yNjQxLC0xLjc1MzY2aDE1LjA4NjZjMjAuMDI4MTQsLTE4LjA0MTU1IDQ5Ljg3ODEyLC0xOS44MTQ3IDcxLjkwMTMxLC00LjI3MTA3YzIyLjAyMzE3LDE1LjU0MzYzIDMwLjM1MjA5LDQ0LjI2Mjg3IDIwLjA2MjMxLDY5LjE3NzYyaDguMzYwMzJjMS45Nzg5OCwwLjAxNjY2IDMuNTc1NjQsMS42MjM0OSAzLjU3OTc0LDMuNjAyNTR6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiNlNjM1MjQiIHN0cm9rZS13aWR0aD0iNSIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5MC40MjkxOCwyNzkuMDQ0ODIpIHNjYWxlKDAuNzUzMzQsMC43NTMzNCkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZTYzNTI0IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPlRvb2xzPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz4=";

    //----------------function列表-------------------
    function songsinfo(ID,TYPE) {
        if (TYPE == "全部信息"){
            return fetch("https://apis.netstart.cn/music/song/detail?ids=" + ID)
            .then((r) => r.text())
            .catch(() => "");
        } else if (TYPE == "所有歌词数据"){
            return fetch("https://apis.netstart.cn/music/lyric?id=" + ID)
            .then((r) => r.text())
            .catch(() => "");
        } else if (TYPE == "URL"){
            try {
                return fetch("https://api.vkeys.cn/v2/music/netease?id=" + ID)
                .then(response => response.json())
                .then(dt => {
                    return dt.data.url;
                })
                .catch(() => {
                    return '';
                    });
                } catch (error) {
                return '';
            }
        } else if (TYPE == "网易云中页面URL"){
            return "https://music.163.com/#/song?id=" + ID;
        } else if (TYPE == "歌曲名"){
            try {
                return fetch("https://apis.netstart.cn/music/song/detail?ids=" + ID)
                .then(response => response.json())
                .then(data => {
                    return data.songs[0].name;
                })
                .catch(() => {
                    return '';
                    });
                } catch (error) {
                return '';
            }
        } else if (TYPE == "歌手信息"){
            try {
                return fetch("https://apis.netstart.cn/music/song/detail?ids=" + ID)
                .then(response => response.json())
                .then(data => {
                    if (data.songs && data.songs.length) {
                        const song = data.songs[0];
                        if (song.ar && song.ar.length > 0) {
                            return song.ar.map(a => a.name).join(' / ');
                        } else {
                            return '';
                        }
                    } else {
                        return '';
                    }
                })
                .catch(() => {
                    return '';
                });
            } catch (error) {
                return '';
            }
        } else if (TYPE == "歌词"){
            try {
                return fetch("https://apis.netstart.cn/music/lyric?id=" + ID)
                .then(response => response.json())
                .then(data => {
                    return data.lrc.lyric;
                })
                .catch(() => {
                    return '';
                    });
                } catch (error) {
                return '';
            }
        } else if (TYPE == "翻译歌词"){
            try {
                return fetch("https://apis.netstart.cn/music/lyric?id=" + ID)
                .then(response => response.json())
                .then(data => {
                    return data.tlyric.lyric;
                })
                .catch(() => {
                    return '';
                    });
                } catch (error) {
                return '';
            }
        } else if (TYPE == "封面URL"){
            try {
                return fetch("https://apis.netstart.cn/music/song/detail?ids=" + ID)
                .then(response => response.json())
                .then(data => {
                    const song = data.songs[0];
                    return song.al?.picUrl || '';
                })
                .catch(() => {
                    return '';
                    });
                } catch (error) {
                return '';
            }
        }
        
    }
    //----------------function列表-------------------
    
    const Cast = {
        toNumber: (value) => {
            return Number(value);
        }
    };

    class NMusic {

        static instance;

        constructor(runtime) {
            this.runtime = runtime;
            this.audioElements = {};
            NMusic.instance = this;
        }

        formatMessage(id) {
            return this._formatMessage({
                id,
                default: id,
                description: id
            });
        }


        getInfo() {
            return {
                id: "MecllNeteaseMusic",
                name: "Mecll的网易云音乐API（正式版）",
                color1: "#000000",
                color2: "#b30000",
                color3: "#ff0000",
                blockIconURI: blockicon,

                //----------表格------------
                menus: {
                    sreachtype: {
                        acceptReporters: true,
                        items: ["简", "繁"]
                    },
                    newsongstype: {
                        acceptReporters: true,
                        items: ["全部", "华语", "欧美", "日本", "韩国"]
                    },
                    getonlinesongsinfotypejson: {
                        acceptReporters: true,
                        items: ["全部信息", "所有歌词数据"]
                    },
                    getonlinesongsinfotype: {
                        acceptReporters: true,
                        items: ["URL", "歌曲名", "歌手信息", "歌词", "翻译歌词", "封面URL", "网易云中页面URL"]
                    },
                    musicplaytype: {
                        acceptReporters: false,
                        items: ["播放", "暂停", "停止"]
                    },
                    getsongsinfo: {
                        acceptReporters: true,
                        items: ["URL","播放时间（秒）", "总时长（秒）","音量","速度"]
                    },
                    wait: {
                        acceptReporters: true,
                        items: ["等待","不等待"]
                    }
                },
                //----------表格------------

                blocks: [

                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: '------------------------------------'
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: '· 鼠标悬停至积木块以查看积木使用方法'
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: '------------------------------------'
                    },

                    //音乐部分
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: '音乐相关'
                    },

                    {
                        opcode: "SearchSongs",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "搜索 [TYPE] [NAME]",
                        tooltip: "搜索歌曲【TYPE】【NAME】\n【TYPE】\n- 简：返回json值相对简洁\n- 繁：返回json值相对复杂（可以看成是 [搜索(简)] 与 [获取音乐(ID)的(所有json数据)] 两积木的组合）\n【NAME】输入你想搜索歌曲的名字或作者",
                        arguments: {
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "sreachtype",
                            },
                            NAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "锦里",
                            },
                        }
                    },

                    {
                        opcode: "SearchSuggestions",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "搜索建议 [TYPE] 关键词 [NAME]",
                        tooltip: "搜索建议【TYPE】【NAME】\n【TYPE】\n- 简：返回json值仅包含歌曲名字等有用信息，适用于仅截取歌曲关键词的搜索建议\n- 繁：返回json值包含歌曲ID、名字、作者等有用信息\n【NAME】输入你想搜索歌曲的名字或作者",
                        arguments: {
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "sreachtype",
                            },
                            NAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "锦里",
                            },
                        }
                    },

                    {
                        opcode: "CheckSongs",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "检测是否可播放 [ID]",
                        tooltip: "检测是否可播放【ID】\n【ID】输入歌曲ID",
                        arguments: {
                            ID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "441617611",
                            },
                        }
                    },

                    {
                        opcode: "GetOnlineSongsInfo_json",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "获取音乐ID： [ID] 的 [TYPE] （JSON）",
                        tooltip: "获取音乐json信息【ID】【TYPE】\n【ID】输入歌曲ID\n【TYPE】\n- 全部信息：获取歌曲的所有详细数据\n- 所有歌词数据：获取歌曲的所有歌词数据（包括翻译歌词）",
                        arguments: {
                            ID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "441617611",
                            },
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "getonlinesongsinfotypejson",
                            }
                        }
                    },

                    {
                        opcode: "GetOnlineSongsInfo",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "获取音乐ID： [ID] 的 [TYPE]",
                        tooltip: "获取音乐信息【ID】【TYPE】\n【ID】输入歌曲ID\n【TYPE】\n- URL：获取音乐可直接播放链接\n- 歌曲名：获取歌曲名字\n- 歌手信息：获取歌曲作者名字（若作者不止一个，中间用“ / ”隔开）\n- 歌词：获取歌曲的原版歌词\n- 翻译歌词：获取歌曲的翻译歌词\n- 封面URL：获取歌曲封面链接\n- 网易云中页面URL：获取该歌曲在网易云中页面的网址",
                        arguments: {
                            ID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "441617611",
                            },
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "getonlinesongsinfotype",
                            }
                        }
                    },

                    {
                        opcode: "GetOnlineSongsReview",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "获取音乐ID： [ID] 的评论，数量 [NUM]",
                        tooltip: "获取音乐评论【ID】【NUM】\n【ID】输入歌曲ID\n【NUM】输入获取评论数量",
                        arguments: {
                            ID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "441617611",
                            },
                            NUM: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "10",
                            }
                        }
                    },

                    {
                        opcode: "GetOnlineSongsHotReview",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "获取音乐ID： [ID] 的热门评论",
                        tooltip: "获取音乐热门评论（15个）【ID】\n【ID】输入歌曲ID",
                        arguments: {
                            ID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "441617611",
                            },
                        }
                    },

                    {
                        opcode: "GetHotSearch",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "获取热歌榜 [TYPE]",
                        tooltip: "获取热歌榜【TYPE】\n【TYPE】\n- 简：返回json值仅包含歌曲名字等有用信息\n- 繁：返回json值包含歌曲名字及热度等有用信息",
                        arguments: {
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "sreachtype",
                            },
                        }
                    },

                    {
                        opcode: "GetNewSongs",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "新歌速递 [TYPE]",
                        tooltip: "新歌速递【TYPE】\n【TYPE】\n- 全部：获取所有新歌\n- 华语：获取所有华语新歌\n- 欧美：获取所有欧美新歌\n- 日本：获取所有日本新歌\n- 韩国：获取所有韩国新歌",
                        arguments: {
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "newsongstype",
                            },
                        }
                    },

                    {
                        opcode: "NewSongsSuggestions",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "推荐新音乐：数量 [NUM]",
                        tooltip: "推荐新音乐【NUM】\n【NUM】输入想获取的新音乐数量",
                        arguments: {
                            NUM: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "10",
                            },
                        }
                    },

                    //控制播放部分
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: '播放相关 - 控制'
                    },

                    {
                        opcode: 'StartPlayMusic',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '从 [url] 播放音乐，并添加至音轨 [id] 同时 [wait] 播放成功',
                        tooltip: "播放音乐【URL】【ID】【WAIT】\n【URL】输入歌曲可播放直链\n【ID】输入将加载音频放入线程的名字\n【WAIT】\n- 等待：等待该音轨音乐加载成功并正常播放后运行结束\n- 不等待：瞬时加载，在同一音轨中，若上一次加载未完成时再次运行会出现重叠播放BUG",
                        arguments: {
                            url: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'http://music.163.com/song/media/outer/url?id=441617611'
                            },
                            id:{
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'track1'
                            },
                            wait:{
                                type: Scratch.ArgumentType.STRING,
                                menu: 'wait'
                            }
                        }
                    },

                    {
                        opcode: 'ControlMusic',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '[TYPE] 音轨为 [id] 音乐',
                        tooltip: "控制音乐【TYPE】【ID】\n【TYPE】\n- 播放：播放该线程音乐\n- 暂停：暂停该线程音乐\n- 停止：停止该线程音乐，并将该音乐从此线程中去除\n【ID】输入控制线程的名字",
                        arguments: {
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'musicplaytype'
                            },
                            id:{
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'track1'
                            }
                        }
                    },

                    {
                        opcode: 'ControlAllMusic',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '[TYPE] 所有音轨音乐',
                        tooltip: "控制所有音乐【TYPE】\n【TYPE】\n- 播放：同时播放所有线程音乐\n- 暂停：同时暂停所有线程音乐\n- 停止：同时停止所有线程音乐，并将所有音乐从所有线程中去除",
                        arguments: {
                            TYPE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'musicplaytype'
                            },
                        }
                    },

                    {
                        opcode: 'JumpToTime',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '将音轨为 [id] 的音乐跳转到时间 [time] 秒',
                        tooltip: "跳转时间【ID】【TIME】\n【ID】输入跳转时间线程的名字\n【TIME】输入时间（秒），该线程歌曲将从这里继续播放",
                        arguments: {
                            id:{
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'track1'
                            },
                            time: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },

                    {
                        opcode: 'ChangeVolume',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '将音轨为 [id] 的音乐音量调到 [volume]',
                        tooltip :"调节音量【ID】【VOLUME】\n【ID】输入调节音量线程的名字\n【VOLUME】输入“0-100”之间任意一数，该线程歌曲音量将会改变至输入值",
                        arguments: {
                            id:{
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'track1'
                            },
                            volume: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            }
                        }
                    },

                    {
                        opcode: 'ChangeSpeed',
                        blockType: Scratch.BlockType.COMMAND,
                        text: '将音轨为 [id] 的音乐速度调节为 [speed] x',
                        tooltip :"调节歌曲速度【ID】【SPEED】\n【ID】输入调节歌曲速度线程的名字\n【SPEED】输入变速数值，该线程歌曲速度将会改变至输入值",
                        arguments: {
                            id:{
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'track1'
                            },
                            speed: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            }
                        }
                    },

                    //播放信息部分
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: '播放相关 - 播放信息'
                    },

                    {
                        opcode: 'GetAllTracksNumber',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '获取所有音轨数量',
                        tooltip: "获取所有音轨数量\n返回数字",
                    },

                    {
                        opcode: 'IsMusicPlaying',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '音轨 [id] 是否正在播放音乐?',
                        tooltip: "检测是否在播放音乐【ID】\n【ID】输入检测线程的名字",
                        arguments: {
                            id:{
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'track1'
                            },
                        }
                    },

                    {
                        opcode: 'GetSongsInfo',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '音轨 [id] 音乐的 [type]',
                        tooltip: "获取音轨音乐数据【ID】【TYPE】\n【ID】输入获取音乐数据线程的名字\n【TYPE】\n- URL：获取当前音轨音乐的URL\n- 播放时间（秒）：获取当前音轨音乐的播放时间\n- 总时长（秒）：获取当前音轨音乐的总时长\n- 音量：获取当前音轨音乐的音量\n- 速度：获取当前音轨音乐的速度",
                        arguments: {
                            id:{
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'track1'
                            },
                            type:{
                                type: Scratch.ArgumentType.STRING,
                                menu: "getsongsinfo",
                            }
                        }
                    },

                    {
                        opcode: 'GetCurrentTimeLyrics',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[lyricsText] 在 [currentTime] 时显示',
                        tooltip: "获取时间点对应歌词【LYRICSTEXT】【CURRENTTIME】\n【LYRICSTEXT】输入歌词数据\n【CURRENTTIME】输入时间（秒）",
                        arguments: {
                            lyricsText: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '歌词'
                            },
                            currentTime: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '时间（秒）'
                            }
                        }
                    },

                    {
                        opcode: 'GetLyricsLineFromTime',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[lyricsText] 在 [currentTime] 时是第几行',
                        tooltip: "获取时间点对应歌词行【LYRICSTEXT】【CURRENTTIME】\n【LYRICSTEXT】输入歌词数据\n【CURRENTTIME】输入时间（秒）",
                        arguments: {
                            lyricsText: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '歌词'
                            },
                            currentTime: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '时间（秒）'
                            }
                        }
                    },

                    {
                        opcode: 'GetTimeFromLyricsLine',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[lyricsText] 在 [linenumber] 行时是第几秒 ',
                        tooltip: "获取歌词行对应时间点【LYRICSTEXT】【LINENUMBER】\n【LYRICSTEXT】输入歌词数据\n【LINENUMBER】输入歌词行数",
                        arguments: {
                            lyricsText: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '歌词'
                            },
                            linenumber: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: '行数'
                            }
                        }
                    },

                    //实用工具部分
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: '实用工具'
                    },

                    {
                        opcode: 'ConvertSecondsToTime',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI:toolsicon,
                        text: '将秒 [seconds] 转时间',
                        tooltip: "将秒转时间【SECONDS】\n【SECONDS】输入秒数",
                        arguments: {
                            seconds: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 95,
                            }
                        }
                    },

                    {
                        opcode: 'ConvertTimeToSeconds',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI:toolsicon,
                        text: '将时间 [timeStr] 转秒',
                        tooltip: "将时间转秒【TIMESTR】\n【TIMESTR】输入时间（分钟数）",
                        arguments: {
                            timeStr: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '01:35',
                            }
                        }
                    },

                    {
                        opcode: 'Json_hqj',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI:toolsicon,
                        text: "[JONS] 中 [KEY] 的值",
                        tooltip: "获取json中key的值【JONS】【KEY】\n【JONS】输入json数据\n【KEY】输入key值",
                        arguments: {
                            JONS: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'json',
                            },
                            KEY: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'key',
                            }
                        }
                    },

                    {
                        opcode: 'Json_xms',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI:toolsicon,
                        text: "[JONS] 的项目数",
                        tooltip: "获取json的项目数【JONS】\n【JONS】输入json数据",
                        arguments: {
                            JONS: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'json',
                            }
                        }
                    },

                    {
                        opcode: 'Json_sj',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI:toolsicon,
                        text: "将 [TEXT] 转为数据",
                        tooltip: "将对象转为数据【TEXT】\n【TEXT】输入text对象",
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'json',
                            }
                        }
                    },

                    {
                        opcode: 'KeepChinese',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '从 [TEXT] 中提取汉字',
                        tooltip: "保留汉字【TEXT】\n【TEXT】输入字符串，返回值只严格保留汉字",
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello,你好123！'
                            }
                        }
                    },

                    {
                        opcode: 'CompareStrings',
                        blockType: Scratch.BlockType.REPORTER,
                        blockIconURI:toolsicon,
                        text: "比较 [str1] 和 [str2] 的相似度百分比",
                        tooltip: "比较两个字符串并返回两字符串相似度百分比【STR1】【STR2】\n【STR1】输入第一个字符串\n【STR2】输入第二个字符串",
                        arguments: {
                            str1: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "str1"
                            },
                            str2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "str2"
                            }
                        }
                    },


                ],
            }
        }

        //音乐部分
        SearchSongs(args) {
            if (args.TYPE == "简") {
                return fetch("https://apis.netstart.cn/music/search?keywords=" + args.NAME)
                .then((r) => r.text())
                .catch(() => "")
            } else if (args.TYPE == "繁") {
                return fetch("https://apis.netstart.cn/music/cloudsearch?keywords=" + args.NAME)
                .then((r) => r.text())
                .catch(() => "")
            }
        }

        SearchSuggestions(args) {
            if (args.TYPE == "简") {
                return fetch("https://apis.netstart.cn/music/search/suggest?keywords=" + args.NAME + "&type=mobile")
                .then((r) => r.text())
                .catch(() => "")
            } else if (args.TYPE == "繁") {
                return fetch("https://apis.netstart.cn/music/search/suggest?keywords=" + args.NAME)
                .then((r) => r.text())
                .catch(() => "")
            }
        }

        CheckSongs(args) {
            return fetch("https://apis.netstart.cn/music/check/music?id=" + args.ID)
            .then((r) => r.text())
            .catch(() => "");
        }

        GetOnlineSongsInfo_json(args) {
            return songsinfo(args.ID,args.TYPE);
        }

        GetOnlineSongsInfo(args) {
            return songsinfo(args.ID,args.TYPE);
        }

        GetOnlineSongsReview(args) {
            try {
                return fetch("https://apis.netstart.cn/music/comment/music?id=" + args.ID + "&limit=" + args.NUM)
                .then(response => response.json())
                .then(data => {
                    return JSON.stringify(data.comments);
                })
                .catch(() => {
                    return '';
                    });
                } catch (error) {
                return '';
            }
        }

        GetOnlineSongsHotReview(args) {
            try {
                return fetch("https://apis.netstart.cn/music/comment/music?id=" + args.ID + "&limit=1")
                .then(response => response.json())
                .then(data => {
                    return JSON.stringify(data.hotComments);
                })
                .catch(() => {
                    return '';
                    });
                } catch (error) {
                return '';
            }
        }

        GetHotSearch(args) {
            if (args.TYPE == "简") {
                return fetch("https://apis.netstart.cn/music/search/hot")
                .then((r) => r.text())
                .catch(() => "")
            } else if (args.TYPE == "繁") {
                return fetch("https://apis.netstart.cn/music/search/hot/detail")
                .then((r) => r.text())
                .catch(() => "")
            }
        }

        GetNewSongs(args) {
            if (args.TYPE == "全部") {
                return fetch("https://apis.netstart.cn/music/top/song?type=0")
                .then((r) => r.text())
                .catch(() => "")
            } else if (args.TYPE == "华语") {
                return fetch("https://apis.netstart.cn/music/top/song?type=7")
                .then((r) => r.text())
                .catch(() => "")
            } else if (args.TYPE == "欧美") {
                return fetch("https://apis.netstart.cn/music/top/song?type=96")
                .then((r) => r.text())
                .catch(() => "")
            } else if (args.TYPE == "日本") {
                return fetch("https://apis.netstart.cn/music/top/song?type=8")
                .then((r) => r.text())
                .catch(() => "")
            } else if (args.TYPE == "韩国") {
                return fetch("https://apis.netstart.cn/music/top/song?type=16")
                .then((r) => r.text())
                .catch(() => "")
            }
        }

        NewSongsSuggestions(args) {
            return fetch("https://apis.netstart.cn/music/personalized/newsong?limit=" + args.NUM)
            .then((r) => r.text())
            .catch(() => "");
        }

        //控制播放部分
        StartPlayMusic(args) {
            if (args.wait == "等待") {
                const url = args.url;
                const id = args.id;
                if (this.audioElements[id]) {
                    this.audioElements[id].pause();
                }
                this.audioElements[id] = new Audio(url);
                this.audioElements[id].addEventListener('canplaythrough', () => {
                this.audioElements[id].play();
                });
                this.audioElements[id].addEventListener('error', (error) => {
                });
                this.audioElements[id].addEventListener('ended', () => {
                });
            } else if (args.wait == "不等待") {
                if (this.audioElements[args.id]) {
                      this.audioElements[args.id].pause();
                }
                fetch(args.url.replace(/http:\/\//g, "https://"), {
  					referrerPolicy: "no-referrer"
  				})
  				.then(r => r.blob())
  				.then(blob => {
  					this.audioElements[args.id] = new Audio(URL.createObjectURL(blob));
  					this.audioElements[args.id].play();
  				})
                .catch(error=>{
                    console.error('音频播放错误:', error);
                })
            }
        }

        ControlMusic(args) {
            const id = args.id;

            if (args.TYPE == "播放") {
                if (this.audioElements[id]) {
                    this.audioElements[id].play();
                }
            } else if (args.TYPE == "暂停") {
                if (this.audioElements[id]) {
                    this.audioElements[id].pause();
                }
            } else if (args.TYPE == "停止") {
                if (this.audioElements[id]) {
                    this.audioElements[id].pause();
                    delete this.audioElements[id];
                    delete this.audioContexts[id];
                    delete this.sources[id];
                }
            }
        }

        ControlAllMusic(args) {
            if (args.TYPE == "播放") {
                for (const id in this.audioElements) {
                    if (this.audioElements.hasOwnProperty(id)) {
                        this.audioElements[id].play();
                    }
                }
            } else if (args.TYPE == "暂停") {
                for (const id in this.audioElements) {
                    if (this.audioElements.hasOwnProperty(id)) {
                        this.audioElements[id].pause();
                    }
                }
            } else if (args.TYPE == "停止") {
                for (const id in this.audioElements) {
                    if (this.audioElements.hasOwnProperty(id)) {
                        this.audioElements[id].pause();
                        delete this.audioElements[id];
                    }
                }
            }
        }

        JumpToTime(args) {
            const time = args.time;
            const id = args.id;
            if (this.audioElements[id]) {
                this.audioElements[id].currentTime = time;
            }
        }

        ChangeVolume(args) {
            const id = args.id;
            if (this.audioElements[id]) {
                const volumePercent = args.volume;
                if (volumePercent >= 0 && volumePercent <= 100) {
                    const volume = volumePercent / 100;
                    this.audioElements[id].volume = volume;
                }
            }
        }

        ChangeSpeed(args) {
            const id = args.id;
            let speed = args.speed;
            if (this.audioElements[id]) {
                if (speed > 0) {
                    this.audioElements[id].playbackRate = speed;
                }
            }
        }

        //播放信息部分
        GetAllTracksNumber() {
            return Object.keys(this.audioElements).length;
        }

        IsMusicPlaying(args) {
            const id = args.id;
            if (this.audioElements[id]) {
                if (!this.audioElements[id].paused &&!this.audioElements[id].ended) {
                    return true;
                } else if (this.audioElements[id].paused) {
                    return "pause";
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

        GetSongsInfo(args) {
            const type = args.type;
            const id = args.id;

            if (type == "URL") {
                if (this.audioElements[id]) {
                    return this.audioElements[id].src;
                }
                return 0;
            } else if (type == "播放时间（秒）") {
                if (this.audioElements[id]) {
                    return this.audioElements[id].currentTime;
                }
                return 0;
            } else if (type == "总时长（秒）") {
                if (this.audioElements[id]) {
                    return this.audioElements[id].duration;
                }
                return 0;
            } else if (type == "音量") {
                if (this.audioElements[id]) {
                    return this.audioElements[id].volume * 100;
                }
                return 0;
            } else if (type == "速度") {
                if (this.audioElements[id]) {
                    return this.audioElements[id].playbackRate;
                }
                return 0;
            }
        }

        GetCurrentTimeLyrics(args) {
            const lines = args.lyricsText.trim().split('\n');
            const lyrics = [];

            for (let line of lines) {
                const matches = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
                if (matches) {
                    const time = parseFloat(matches[1]) * 60 + parseFloat(matches[2]);
                    const text = matches[3].trim();
                    lyrics.push({ time, text });
                }
            }

            for (let i = lyrics.length - 1; i >= 0; i--) {
                const { time, text } = lyrics[i];
                if (time <= args.currentTime) {
                    return text;
                }
            }
            return '';
        }

        GetLyricsLineFromTime(args) {
            const lines = args.lyricsText.trim().split('\n');
            const currentTime = args.currentTime;

            for (let i = lines.length - 1; i >= 0; i--) {
                const matches = lines[i].match(/\[(\d+):(\d+\.\d+)\](.*)/);
                if (matches) {
                    const time = parseFloat(matches[1]) * 60 + parseFloat(matches[2]);
                    if (time <= currentTime) {
                        return i + 1;
                    }
                }
            }
            return 0;
        }

        GetTimeFromLyricsLine(args) {
            const lines = args.lyricsText.trim().split('\n');
            if (!lines || lines.length === 0) {
                return '0';
            }
            if (args.linenumber < 0 || args.linenumber >= lines.length) {
                return '0';
            }
            const line = lines[args.linenumber];
            if (!line) {
                return '0';
            }
            const matches = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
            if (!matches) {
                return '0';
            }
            const minutes = parseFloat(matches[1]);
            const seconds = parseFloat(matches[2]);
            if (isNaN(minutes) || isNaN(seconds)) {
                return '0';
            }
            return minutes * 60 + seconds;
        }

        //实用工具类
        ConvertSecondsToTime({ seconds }) {
            const isInteger = Number.isInteger(seconds);
            let totalMinutes = Math.floor(seconds / 60);
            let remainingSeconds = parseFloat(seconds % 60);
            const formattedMinutes = String(totalMinutes).padStart(2, '0');
            let formattedSeconds;
            if (isInteger) {
                formattedSeconds = String(remainingSeconds).padStart(2, '0');
            } else {
                formattedSeconds = parseFloat(remainingSeconds).toFixed(2);
            }
            return `${formattedMinutes}:${formattedSeconds}`;
        }

        ConvertTimeToSeconds({ timeStr }) {
            if (!timeStr) return 0;
            const parts = timeStr.split(':');
            if (parts.length !== 2) {
                return null;
            }
            const minutes = parseFloat(parts[0]);
            let remaining = parts[1];

            if (remaining.includes('.')) {
                const [seconds, milliseconds] = remaining.split('.');
                return minutes * 60 + parseFloat(seconds) + parseFloat(`0.${milliseconds}`);
            } else {
                const seconds = parseFloat(remaining);
                return minutes * 60 + seconds;
            }
        }

        Json_hqj(args) {
            const { JONS = "", KEY = "" } = args;
            try {
                var json = JSON.parse(JONS);
                return JSON.stringify(json[KEY]);
            } catch (err) {
                return "";
            }
        }

        Json_xms(args) {
            const { JONS = "" } = args;
            try {
                var json = JSON.parse(JONS);
                return Object.keys(json).length;
            } catch (e) {
                return 0;
            }
        }

        Json_sj(args) {
            const { TEXT = "" } = args;
            try {
                var text = TEXT;
                return JSON.parse(text);
            } catch (e) {
                return "";
            }
        }

        KeepChinese(args) {
            return args.TEXT.replace(/[^\u4e00-\u9fa5]/g, '');
        }

        CompareStrings(args) {
            const str1 = args.str1.toString();
            const str2 = args.str2.toString();
          
            // Levenshtein距离算法实现
            function levenshteinDistance(a, b) {
                const matrix = [];
                for (let i = 0; i <= b.length; i++) {
                    matrix[i] = [i];
                }
                for (let j = 0; j <= a.length; j++) {
                    matrix[0][j] = j;
                }
                for (let i = 1; i <= b.length; i++) {
                    for (let j = 1; j <= a.length; j++) {
                        if (b.charAt(i-1) === a.charAt(j-1)) {
                            matrix[i][j] = matrix[i-1][j-1];
                        } else {
                            matrix[i][j] = Math.min(
                                matrix[i-1][j-1] + 1,
                                matrix[i][j-1] + 1,
                                matrix[i-1][j] + 1
                        );
                    }
                }
            }
            return matrix[b.length][a.length];
            }
          
            const distance = levenshteinDistance(str1, str2);
            const maxLength = Math.max(str1.length, str2.length);
            const similarity = (1 - distance / maxLength) * 100;
          
            return Math.round(similarity * 100) / 100; // 保留两位小数
        }

    }

Scratch.extensions.register(new NMusic(Scratch.runtime));
    window.tempExt = {
        info: {
            name: 'Mecll的网易云音乐API（正式版）',
            description: 'sipc废了？那来试试这个！',
            extensionId: 'MecllNeteaseMusic',
            iconURL: 'data:image/webp;base64,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',
            insetIconURL: blockicon,
            featured: true,
            disabled: false,
            collaborator: 'Mecll@CCW',
            collaboratorList: [
                {
                    collaborator: 'Mecll',
                    collaboratorURL: 'https://www.ccw.site/student/64aa9343314bb1118e0f9db7',
                },
            ]
        }
    }

})(Scratch);