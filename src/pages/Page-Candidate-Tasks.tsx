import React from 'react';
import '../styles/Popup-Menu-Style.css'
import '../styles/Page-Candidate.css'
import {
    IonBadge, IonButton,
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonItem, IonLabel, IonList,
    IonMenuButton, IonMenuToggle,
    IonPage, IonRow, IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import PopupMenuCandidate from "./Popup-Menu-Candidate";
import {AddToCalendarButton} from 'add-to-calendar-button-react';

function PageCandidateTasks() {
    return (
        <>
            <PopupMenuCandidate/>

            <IonPage id="main-content">

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonMenuToggle>
                                <IonItem lines="none" routerLink="/logout">
                                    <IonTitle>Выйти</IonTitle>
                                </IonItem>
                            </IonMenuToggle>
                        </IonButtons>
                        <IonTitle>Мои Задания</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <div className="response-vacancy-header">
                        <h1>Разработчик на Жопе</h1>
                    </div>
                    <IonGrid style={{margin: "10px"}}>
                        <IonRow style={{marginLeft: "0px"}}>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Собеседование</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>До какого числа</IonLabel>
                                            <IonItem>11.11.11</IonItem>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning" slot="end">На рассмотрении</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Результат</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Зачтено</i></IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent"
                                                   style={{fontSize: "13px"}}>Перейти к
                                            заданию
                                        </IonButton>
                                    </IonCardContent>
                                </IonCard>
                                <IonItem lines='none' color='transparent' style={{justifyContent: 'center'}}>
                                    <AddToCalendarButton
                                        name="Test-Event"
                                        startDate="2023-05-22"
                                        options={['Google']}
                                        buttonStyle={'text'}
                                    ></AddToCalendarButton>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div className="response-vacancy-header">
                        <h1>Разработчик на Жопе</h1>
                    </div>
                    <IonGrid style={{margin: "10px"}}>
                        <IonRow style={{marginLeft: "0px"}}>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Собеседование</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>До какого числа</IonLabel>
                                            <IonItem>11.11.11</IonItem>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning" slot="end">На рассмотрении</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Результат</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Зачтено</i></IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent"
                                                   style={{fontSize: "13px"}}>Перейти к
                                            заданию</IonButton>
                                        <IonButton expand="block" fill="clear" color="transparent"
                                                   style={{fontSize: "13px"}}>Добавить в
                                            календарь</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Собеседование</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>До какого числа</IonLabel>
                                            <IonItem>11.11.11</IonItem>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning" slot="end">На рассмотрении</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Результат</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Зачтено</i></IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent"
                                                   style={{fontSize: "13px"}}>Перейти к
                                            заданию</IonButton>
                                        <IonButton expand="block" fill="clear" color="transparent"
                                                   style={{fontSize: "13px"}}>Добавить в
                                            календарь</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Собеседование</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel>До какого числа</IonLabel>
                                            <IonItem>11.11.11</IonItem>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Статус</IonLabel>
                                            <IonBadge color="warning" slot="end">На рассмотрении</IonBadge>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>Результат</IonLabel>
                                            <IonLabel color="medium" slot="end"><i>Зачтено</i></IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent"
                                                   style={{fontSize: "13px"}}>Перейти к
                                            заданию</IonButton>
                                        <IonButton expand="block" fill="clear" color="transparent"
                                                   style={{fontSize: "13px"}}>Добавить в
                                            календарь</IonButton>
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

export default PageCandidateTasks;