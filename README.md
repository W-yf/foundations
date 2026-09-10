# foundations

计算机基础回顾的 **R0：短准备与软件设计**。通过规格、测试、抽象和最小工具实践，为 CSAPP 与操作系统学习做准备。

本仓库保存本阶段的详细笔记、独立练习、测试与成果记录；[self-Learning 主仓库](https://github.com/W-yf/self-Learning) 保存总计划、总进度与统一复习队列。本 README 是本课程的状态入口。

## 范围与验收

固定参考 **MIT 6.005 Spring 2016** 的四份讲义：[Testing](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/)、[Specifications](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/06-specifications/)、[Abstract Data Types](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/12-abstract-data-types/)、[Abstraction Functions & Rep Invariants](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/13-abstraction-functions-rep-invariants/)。使用 C/C++ 自拟练习，不使用 Java 评分器。

| 任务 | 完成证据 |
|---|---|
| R0-01 最小环境与起点 | 验证 C/C++ 编译运行、GDB 单步与 Python 测试；用自拟 C 小程序核对指针、数组、结构体及分配/释放，记录缺口 |
| R0-02 规格与测试 | 读 Testing、Specifications；为非负权有向图写接口约定和契约测试，涵盖增删点、设置边权、查询邻居 |
| R0-03 抽象与实现 | 读 ADT、抽象函数与表示不变量；用邻接表和边列表实现同一接口，并通过同一套契约测试 |

图的边界需明确重复节点、缺失节点、自环、负权输入和返回值所有权。验证修改返回的邻居集合不会改变内部图状态，并说明两种表示的不变量及替换依据。这些设计决定留在学习过程中独立完成。

**理论与实验同等重要**：既记录独立解释、推导与边界分析，也记录实现、调试和测试证据；区分独立产出与 AI 提示后的产出。约 12 小时仅为主计划的估时基线，实际用时按证据校准。

不扩展 GUI、持久化、图算法、完整 C++ 复习或系统 CMake 课程。完成本阶段验收后，由主仓库确认进入 CSAPP。完整范围与资料由主仓库的 [LEARNING_PLAN](https://github.com/W-yf/self-Learning/blob/main/LEARNING_PLAN.md) 和 [RESOURCES](https://github.com/W-yf/self-Learning/blob/main/RESOURCES.md) 维护。

## 当前状态

```yaml
last_updated: 2026-09-10
course_id: R0
repository_name: foundations
repository_url: https://github.com/W-yf/foundations
repository_role: course
branch: main
setup_status: remote_repository_initialized
learning_status: not_started
environment_verification: not_started
theory_evidence: none
lab_evidence: none
remote_status: configured
sync_status: initial_publication_verified
initial_published_commit: 94d2d4b3bf0b9cbe258db5e82bc84546fe04a345
initial_publish_verified_on: 2026-09-10
overview_sync_status: pending_summary_update
handoff_status: not_generated
next_task: review_then_r0_01_environment_and_baseline
```

课程初始化提交已推送并完成远程核对，记录的 initial_published_commit 指向已验证的首次发布；本课程尚无实验代码或学习证据，主仓库的课程索引仍待回写发布结果。主仓库也有尚未发布的计划修订；首次接手需核对两边实际版本，上面的远程链接不代表本轮修订已经发布。

## 下一次学习

1. 按 [协作规则](AGENTS.md) 检查主仓库和本课程仓库的同步状态，读取主仓库 STATUS 与本 README；尚无远程时明确记录，不能声称已拉取或同步。
2. 读取主仓库 REVIEW 与题库，先完成到期复习，一次一题。
3. 开始 R0-01，验证最小环境并记录真实缺口，再进入规格与测试。当前没有可运行的构建或测试命令，验证后补充实际命令、结果与通用环境信息。

后续按需建立 `notes/`、`exercises/` 与 `logs/`，实验的源码和测试就近组织。每次学习结束更新本 README 的课程状态及证据入口，再回写主仓库进度；不重复维护全局计划或复习队列。
