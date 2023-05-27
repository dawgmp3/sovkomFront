import React from 'react';
import './Home.css';
import {
    IonBadge,
    IonButtons,
    IonContent,
    IonHeader, IonIcon,
    IonImg, IonItem, IonLabel, IonList,
    IonMenu,
    IonMenuButton, IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

function PopupMenu() {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Платформа</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-no-padding">
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink="/">
                                <IonIcon src="../images/pulse-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Главная страничка</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/">
                                <IonIcon src="../images/ice-cream-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Все вакансии</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/">
                                <IonIcon src="../images/calendar-number-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Статистика</IonLabel>
                            </IonItem>
                            <IonItem className="ion-padding-top">
                                <IonLabel className="ion-padding-top">Дополнительно</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/">
                                <IonIcon src="../images/terminal-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Поддержка</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    );
}

export default PopupMenu;