import '../styles/Page-Candidate.css'
import {
    IonBadge, IonButton,
    IonButtons,
    IonCard,
    IonCardContent, IonChip, IonCol,
    IonContent, IonGrid,
    IonHeader, IonIcon, IonItem, IonLabel, IonList,
    IonMenuButton,
    IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonThumbnail,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import React from "react";
import PopupMenu from "./Popup-Menu";

function ListCandidates() {
    return (
        <>
            <PopupMenu/>
            <IonPage id="main-content">

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Список кандидатов</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonItem>
                        <IonGrid color="transparent">
                            <IonRow>
                                <IonCol>
                                    <IonCard style={{borderRadius: '20px'}}>
                                        <IonCardContent>
                                            <IonList>
                                                <IonItem>
                                                    <IonLabel>Вакансия</IonLabel>
                                                    <IonChip>
                                                        <IonIcon icon="../images/calendar-outline.svg"></IonIcon>
                                                        <IonLabel>Java Backend Junior</IonLabel>
                                                        <IonIcon
                                                            icon="../images/close-circle-outline.svg"></IonIcon>
                                                    </IonChip>
                                                </IonItem>

                                                <IonItem>
                                                    <IonLabel>Прошел этап</IonLabel>
                                                    <IonList>
                                                        <IonItem>
                                                            <IonSelect aria-label="Fruit" interface="popover"
                                                                       placeholder="Выберите этап">
                                                                <IonSelectOption value="apples">Тест на знание
                                                                    Java</IonSelectOption>
                                                                <IonSelectOption value="oranges">Тест на знание
                                                                    C#</IonSelectOption>
                                                                <IonSelectOption value="bananas">Тест на знание
                                                                    C++</IonSelectOption>
                                                            </IonSelect>
                                                        </IonItem>
                                                    </IonList>
                                                </IonItem>

                                                <IonItem>
                                                    <IonLabel>Получил результат</IonLabel>
                                                    <IonList>
                                                        <IonItem>
                                                            <IonSelect aria-label="Fruit" interface="popover"
                                                                       placeholder="Выберите результат">
                                                                <IonSelectOption value="apples">Больше
                                                                    5</IonSelectOption>
                                                                <IonSelectOption value="oranges">Больше
                                                                    10</IonSelectOption>
                                                                <IonSelectOption value="bananas">Больше
                                                                    15</IonSelectOption>
                                                            </IonSelect>
                                                        </IonItem>
                                                    </IonList>
                                                </IonItem>
                                            </IonList>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>

                                <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="6"
                                        className="vacancy-cards-list">
                                    <div className="search-button">
                                        <IonSearchbar searchIcon="../images/search-outline.svg"
                                                      placeholder="Search preorders and products"></IonSearchbar>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonItem>

                    <IonGrid>
                        <IonRow>
                            <IonCol size="2" sizeXs="8" sizeSm="8" sizeMd="8" sizeLg="2">
                                <IonChip>
                                    <IonIcon icon="../images/calendar-outline.svg"></IonIcon>
                                    <IonLabel>Java Backend Junior</IonLabel>
                                    <IonIcon icon="../images/close-circle-outline.svg"></IonIcon>
                                </IonChip>
                            </IonCol>
                            <IonCol size="2" sizeXs="8" sizeSm="8" sizeMd="8" sizeLg="2">
                                <IonChip>
                                    <IonIcon icon="../images/star-outline.svg"></IonIcon>
                                    <IonLabel>Больше 10</IonLabel>
                                    <IonIcon icon="../images/close-circle-outline.svg"></IonIcon>
                                </IonChip>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid style={{margin: "0px"}}>
                        <IonRow style={{margin: "0px"}}>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt="Silhouette of mountains"
                                                     src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                                     style={{borderRadius: '16px'}}/>
                                            </IonThumbnail>
                                            <IonLabel>Орлова Софья</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Статус заявки</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Тест на знание Java</i></IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>PO arrival date</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>12/27/2023</i></IonLabel>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">Подробнее о
                                            кандидате</IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt="Silhouette of mountains"
                                                     src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                                     style={{borderRadius: '16px'}}/>
                                            </IonThumbnail>
                                            <IonLabel>Орлова Софья</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Статус заявки</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Тест на знание Java</i></IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>PO arrival date</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>12/27/2023</i></IonLabel>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">Подробнее о
                                            кандидате</IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt="Silhouette of mountains"
                                                     src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                                     style={{borderRadius: '16px'}}/>
                                            </IonThumbnail>
                                            <IonLabel>Орлова Софья</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Статус заявки</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Тест на знание Java</i></IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>PO arrival date</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>12/27/2023</i></IonLabel>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">Подробнее о
                                            кандидате</IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt="Silhouette of mountains"
                                                     src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                                     style={{borderRadius: '16px'}}/>
                                            </IonThumbnail>
                                            <IonLabel>Орлова Софья</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Статус заявки</IonLabel>
                                            <IonBadge color="warning">В процессе отбора</IonBadge>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Пройденный этап</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Тест на знание Java</i></IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>PO arrival date</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>12/27/2023</i></IonLabel>
                                        </IonItem>

                                        <IonButton expand="block" fill="clear" color="transparent">Подробнее о
                                            кандидате</IonButton>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonContent>
            </IonPage>
        </>
    );
}

export default ListCandidates;