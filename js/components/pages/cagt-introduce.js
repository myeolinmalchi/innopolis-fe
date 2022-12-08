customElements.define(
    'location-container',
    class extends HTMLElement {
        connectedCallback() {
            const title = this.getAttribute('title');
            const subtitle = this.getAttribute('subtitle');
            const location_title = document.createElement('span');
            location_title.classList.add('location-title');
            location_title.innerHTML = `
                ${title}${
                subtitle
                    ? `<span class="body-me location-subtitle">${subtitle}</span>`
                    : ``
            }
            `;
            const location_detail_wrapper = document.createElement('div');
            location_detail_wrapper.classList.add('location-detail-wrapper');

            const location_detail = document.createElement('div');
            location_detail.classList.add('location-detail');
            const location_map = document.createElement('div');
            location_map.classList.add('location-map');

            this.classList.add('location-container');

            const [
                campus,
                address,
                car,
                [public1_title, public1_content],
                [public2_title, public2_content],
            ] = [
                this.getAttribute('campus'),
                this.getAttribute('address'),
                this.getAttribute('car'),
                [
                    this.getAttribute('public1-title'),
                    this.getAttribute('public1-content'),
                ],
                [
                    this.getAttribute('public2-title'),
                    this.getAttribute('public2-content'),
                ],
            ];

            location_detail.innerHTML = `
            <div>
                <div class="location-detail-content-wrapper">
                    <span class="location-detail-title body-me"
                        >캠퍼스</span
                    >
                    <span
                        class="location-detail-content body-me"
                        >${campus}</span
                    >
                </div>
                <div class="location-detail-content-wrapper">
                    <span class="location-detail-title body-me"
                        >주소</span
                    >
                    <span
                        class="location-detail-content body-me"
                        >${address}</span
                    >
                </div>
                <div class="location-detail-content-wrapper">
                    <span class="location-detail-title body-me"
                        >승용차</span
                    >
                    <span
                        class="
                            location-detail-content-small
                            body-me
                        "
                        >${car}</span
                    >
                </div>
                <div class="location-detail-content-wrapper">
                    <span class="location-detail-title body-me"
                        >대중교통</span
                    >
                    <div class="public-transport-wrapper">
                        <span
                            class="
                                public-transport-title
                                body-bd
                            "
                            >${public1_title}</span
                        >
                        <span
                            class="
                                public-transport-content
                                body-me
                            "
                            >${public1_content}</span
                        >
                    </div>
                    ${
                        public2_title
                            ? `                    <div class="public-transport-wrapper">
                        <span
                            class="
                                public-transport-title
                                body-bd
                            "
                            >${public2_title}</span
                        >
                        <span
                            class="
                                public-transport-content
                                body-me
                            "
                            >${public2_content}</span
                        >
                    </div>`
                            : ''
                    }
                </div>
            </div>
            `;
            location_detail_wrapper.append(location_map, location_detail);
            this.append(location_title, location_detail_wrapper);
            setTimeout(() => {
                const map = new kakao.maps.Map(location_map, {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                });
            }, 100);
        }
    },
);
