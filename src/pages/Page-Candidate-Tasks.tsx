import React, {useEffect, useState} from 'react';
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

const PageCandidateTasks = () => {
    const [usersChallenge, setUsersChallenge] = useState<any[]>([])
    const fetchDataVacancyCards = () => {
        fetch("http://sovkombank-cheescake-hackathon.duckdns.org/api/userInfo/getUsersResponses?userId=dcd6baa9-cbc2-428b-afe4-556a4f7538d0")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsersChallenge(data)
            })
    }
    useEffect(() => {
        fetchDataVacancyCards()
    }, [])
    console.log(typeof(usersChallenge))
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
                {usersChallenge.map((chell: Vacancy) => (
                    <div>
                        <div className="response-vacancy-header" key={chell.vacancyId}>
                            <h1>{chell.vacancyName}</h1>
                        </div>
                        <IonGrid style={{margin: "10px"}}>
                            <IonRow style={{marginLeft: "0px"}}>
                                {(chell.stages).map((stage: Stage) => (
                                    <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                            className="vacancy-cards-list" key={stage.id}>
                                        <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                            <IonCardHeader>
                                                <IonCardTitle style={{fontWeight: 600}}>{stage.name}</IonCardTitle>
                                            </IonCardHeader>
                                            <IonCardContent>
                                                <IonItem>
                                                    <IonLabel>До какого числа</IonLabel>
                                                    <IonItem>{moment(stage.deadline).format('DD.MM.YY HH:mm')}</IonItem>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel>Статус</IonLabel>
                                                    <IonBadge color="warning" slot="end">{stage.state}</IonBadge>
                                                </IonItem>
                                                <IonItem>
                                                    <IonLabel>Результат</IonLabel>
                                                    <IonLabel color="medium" slot="end"><i>{stage.result}</i></IonLabel>
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
                                ))}
                            </IonRow>
                        </IonGrid>
                    </div>
                ))}
            </IonPage>
        </>
    );
}

export default PageCandidateTasks;