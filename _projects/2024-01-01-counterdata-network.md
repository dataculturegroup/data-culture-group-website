---
title: The Counterdata Network
description: supporting activists tracking human rights violations in news with AI
thumbnail: counterdata-network-thumb.png
slug: "counterdata-network"
---

Human rights defenders around the world – including community-based organizations, nonprofits, academics, and journalists – increasingly use news articles to compile databases of human rights violations which they use to document a problem, advocate for policy change, and to provide services to impacted communities. Their work builds on a long tradition started by journalist Ida B. Wells, who compiled information from media articles to systematically document the injustice of lynchings across the U.S. Some contemporary examples include: Latin American advocates who document cases of femicide/feminicide; journalists in the US who compile databases of citizens shot by police; and others.

The Counterdata Network – composed of the Data Culture Lab (Northeastern), the [Data + Feminism Lab (MIT)]((https://dataplusfeminism.mit.edu)), and the [DISCO Lab (Brown)](https://discolab.cs.brown.edu) – co-designed a software platform for monitoring human rights abuses from news reports. Originally, this emerged from the work of the [The Data Against Feminicide project](http://datoscontrafeminicidio.net). The Counterdata Network has been extending the platform for groups that monitor other types of human rights violations. The platform uses AI/ML models to detect news articles about human rights violations and present those to users as email alerts and as entries on a web dashboard.    

We are supporting these groups by collaboratively designing technologies that can help them automate some of this work. We can teach machines to surface potentially relevant news articles. We can build tools to help them extract relevant data from a news report and prepare it for entry into their tracking databases. We can design these systems together. The project serves as an example of rethinking tenents of emerging AI technologies with and for human rights defenders and researchers.

With each partner group we train a binary machine learning classifer to identify online news articles about the types of incidents they are interested in tracking.
Our [open-source software tool-chain](https://github.com/counterdata-network) ingests matching stories based on keywords from online news archives (such as [Media Cloud](https://mediacloud.org), [Newscatcher](https://www.newscatcherapi.com/), and the [Internet Archive's Wayback Machine](https://web.archive.org/)), passes candidate articles through the trained models, and relays relevant articles that score above a threshold to a central server. Groups receive daily emails with news stories automatically grouped by "incident", and can also access the historical archive via an online dashboard.

### Papers, Presentations, and Press

* [AI tools developed by Northeastern researcher allow grassroots organizations to monitor human and civil rights violations](https://news.northeastern.edu/2024/08/06/ai-data-collection-human-rights/) - Alena Kuzub, NGN, Aug 2024
* Bhargava, R., Suresh, H., Dogan, A.L., So, W., Suárez Val, H. Fumega, S., D’Ignazio, C. [_News as Data for Activists: a case study in feminicide counterdata production_](https://github.com/browninstitute/c-plus-j-website/raw/main/proceedings/Session9Group2.pdf). 2022 Conference + Journalism Conference (C+J22).
* Suresh, H., Dogan, A. L., Movva, R., Bhargava, R., So, W., Martinez Cuba, A., Taurino, G., García-Montes, M., Cruxen, I., & D’Ignazio, C. (2022). [_Towards Intersectional Feminist and Participatory ML: A Case Study in Supporting Feminicide Counterdata Collection_](https://dl.acm.org/doi/10.1145/3531146.3533132). 2022 Conference on Fairness, Accountability and Transparency (FAccT22).
* D'Ignazio, C., Cruxên, I., Val, H. S., Cuba, A. M., García-Montes, M., Fumega, S., Suresh, H. & So, W. (2022). [_Feminicide and counterdata production: Activist efforts to monitor and challenge gender-related violence_](https://www.cell.com/patterns/pdf/S2666-3899(22)00127-1.pdf). Patterns, 3(7).

### Related Posts

* [Grant to support AI monitoring of news for human rights violations](/2024/08/06/data-empowerment-fund-grant.html)
* [Paper Presentation at ACM Conference on Fairness, Accountability, and Transparency](/2022/06/20/participatory-ml-facct-22)
* [Panel Talk @ Computation + Journalis 2022 Conference](/2022/06/08/c-plus-j-2022)
* [Panel Talk @ the NULab 2021 Conference](/2021/03/25/good-data-panel.html)

### Collaborators

* [Data + Feminism Lab @ MIT](https://dataplusfeminism.mit.edu)
* [Disco Lab @ Brown](https://discolab.cs.brown.edu)
* [Data Against Feminicide](http://datoscontrafeminicidio.net)
* [Media Cloud](https://mediacloud.org)

### Supporters

This work at Northeastern has been supported with funds from:
* "Grassroots AI-supported news monitoring with human rights organizations" - 2024 award from the [Data Empowerment Fund](https://dataempowerment.fund/#initiatives) (Omidyar Network * McGovern Foundation)
* “Community-Based AI for Human Rights Monitoring” - [2024 NULab Community Collaboration Grant](https://cssh.northeastern.edu/nulab/community-based-ai-human-rights/) (NU Lab for Digital Humanities and Computational Social Science)
