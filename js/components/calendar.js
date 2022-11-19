customElements.define(
    'calendar-unit',
    class extends HTMLElement {
        state;
        typeStyleMap = new Map([
            [
                'none',
                () => {
                    this.style.borderRadius = 'none';
                    this.style.background = 'var(--background-white-01)';
                    switch (this.state) {
                        case 'default':
                            this.style.color = 'var(--text-primary)';
                            break;
                        case 'disabled':
                            this.style.color = 'var(--text-disabled)';
                            break;
                        case 'accent':
                            this.style.color = 'var(--text-red)';
                            break;
                    }
                },
            ],
            [
                'one',
                () => {
                    this.style.background = 'var(--color-blue-filled)';
                    this.style.color = 'var(--text-white)';
                    this.style.borderRadius = '42px';
                },
            ],
            [
                'left',
                () => {
                    this.style.background = 'var(--color-blue-filled)';
                    this.style.color = 'var(--text-white)';
                    this.style.borderRadius = '42px 0px 0px 42px';
                },
            ],
            [
                'right',
                () => {
                    this.style.background = 'var(--color-blue-filled)';
                    this.style.color = 'var(--text-white)';
                    this.style.borderRadius = '0px 42px 42px 0px';
                },
            ],
            [
                'center',
                () => {
                    this.style.background = 'var(--color-blue-filled)';
                    this.style.color = 'var(--text-white)';
                    this.style.borderRadius = '0px';
                },
            ],
        ]);
        connectedCallback() {
            const [state, type] = [
                this.getAttribute('state') ?? 'default',
                this.getAttribute('type') ?? 'none',
            ];

            this.state = state;
            this.setCommonStyle();
            this.typeStyleMap.get(type)();
        }

        setCommonStyle() {
            this.classList += 'body-03-bd';
            this.style.cursor = 'pointer';
            this.style.width = '42px';
            this.style.height = '42px';
            this.style.boxSizing = 'border-box';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.margin = '0px';
        }
    },
);

customElements.define(
    'calendar-container',
    class extends HTMLElement {
        connectedCallback() {
            this.style.display = 'flex';
            this.style.flexDirection = 'column';
            this.style.padding = '32px 20px';
        }
    },
);

customElements.define(
    'calendar-units',
    class extends HTMLElement {
        units;
        date;
        connectedCallback() {
            this.date = new Date();
            this.style.display = 'flex';
            this.style.flexWrap = 'wrap';
            this.style.width = '294px';

            this.render();
        }

        prevMonth() {
            this.innerHTML = '';
            this.date = new Date(
                this.date.getFullYear(),
                this.date.getMonth() - 1,
                1,
            );
            this.render();
        }

        nextMonth() {
            this.innerHTML = '';
            this.date = new Date(
                this.date.getFullYear(),
                this.date.getMonth() + 1,
                1,
            );
            this.render();
        }

        render() {
            const year = this.date.getFullYear();
            const month = this.date.getMonth();
            const startDay = new Date(year, month, 0);
            const prevDate = startDay.getDate();
            const prevDay = startDay.getDay();

            const endDay = new Date(year, month + 1, 0);
            const nextDate = endDay.getDate();
            const nextDay = endDay.getDay();

            this.units = [];

            // 지난 달 렌더링
            for (
                let i = prevDate - (prevDay === 6 ? -1 : prevDay);
                i <= prevDate;
                i++
            ) {
                const unit = document.createElement('calendar-unit');
                unit.setAttribute('state', 'disabled');
                unit.setAttribute('type', 'none');
                unit.innerHTML = i;
                this.units.push(unit);
            }

            // 이번 달 렌더링
            for (let i = 1; i <= nextDate; i++) {
                const unit = document.createElement('calendar-unit');
                unit.setAttribute('type', 'none');
                if ((prevDay + 1 + i) % 7 === 1) {
                    unit.setAttribute('state', 'accent');
                } else {
                    unit.setAttribute('state', 'default');
                }
                unit.innerHTML = i;
                this.units.push(unit);
            }

            // 다음 달 렌더링
            for (let i = 1; i < 7 - nextDay; i++) {
                const unit = document.createElement('calendar-unit');
                unit.setAttribute('state', 'disabled');
                unit.setAttribute('type', 'none');
                unit.innerHTML = i;
                this.units.push(unit);
            }

            this.units.forEach((u) => {
                this.append(u);
            });
        }
    },
);

customElements.define(
    'calendar-header',
    class extends HTMLElement {
        units;
        container;
        unit_container;
        constructor() {
            super();
            this.container = document.createElement('div');
            this.container.style.display = 'flex';
            this.container.style.flexDirection = 'row';
            this.container.style.alignItems = 'center';
            this.container.style.justifyContent = 'space-between';
            this.container.style.width = '100%';
            this.container.style.marginBottom = '32px';

            this.unit_container = document.createElement('div');
            this.unit_container.style.display = 'flex';
            this.unit_container.style.width = '100%';

            this.unit_container.innerHTML = `
                <calendar-unit state="accent">일</calendar-unit>
                <calendar-unit>월</calendar-unit>
                <calendar-unit>화</calendar-unit>
                <calendar-unit>수</calendar-unit>
                <calendar-unit>목</calendar-unit>
                <calendar-unit>금</calendar-unit>
                <calendar-unit>토</calendar-unit>
            `;
        }
        connectedCallback() {
            setTimeout(() => {
                this.units = this.nextElementSibling;
                this.classList += 'subtitle-03';
                this.style.display = 'flex';
                this.style.flexDirection = 'row';
                this.style.alignItems = 'center';
                this.style.justifyContent = 'space-between';
                this.style.flexWrap = 'wrap';
                this.style.width = '294px';
                this.render();
            });
        }

        render() {
            const year = this.units.date.getFullYear();
            const month = this.units.date.getMonth() + 1;

            this.innerHTML = '';

            const leftArrow = document.createElement('span');
            leftArrow.innerHTML = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.875 11L1.875 6L6.875 1" stroke="#4B5563" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
            leftArrow.style.order = '0';
            leftArrow.onclick = () => {
                this.units.prevMonth();
                const year = this.units.date.getFullYear();
                const month = this.units.date.getMonth() + 1;
                center.innerText = `${year}.${month}`;
            };
            const rightArrow = document.createElement('span');
            rightArrow.innerHTML = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.125 11L6.125 6L1.125 1" stroke="#4B5563" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
            rightArrow.style.order = '2';
            rightArrow.onclick = () => {
                this.units.nextMonth();
                const year = this.units.date.getFullYear();
                const month = this.units.date.getMonth() + 1;
                center.innerText = `${year}.${month}`;
            };

            const center = document.createElement('span');
            center.innerText = `${year}.${month}`;
            center.style.order = '1';

            this.container.append(leftArrow, center, rightArrow);
            this.append(this.container, this.unit_container);
        }
    },
);
