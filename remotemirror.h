/********************************************************************/
/*                                                                  */
/*           header remotemirror.h                                  */
/*                                                                  */
/* Date:     01.08.19                                               */
/* Author:   sivaram, intec GmbH Luedenscheid                       */
/*                                                                  */
/********************************************************************/
#ifndef REMOTEMIRROR_H
#define REMOTEMIRROR_H

/********************************************************************/
/* Includes                                                         */
/********************************************************************/
#include <QObject>
#include <QStringList>

/**
 * Short information about class RemoteMirror
 * - To create a mirror of qml GUI objects to use from javascript
 */
class RemoteMirror : public QObject
{
    Q_OBJECT
    /****************************************************************/
    /* Member and methods                                           */
    /****************************************************************/

private:
  //************ Q_PROPERTY local variables ********** //

    QString m_softKeyName1;
    QString m_softKeyName2;
    QString m_softKeyName3;
    QString m_softKeyName4;
    QString m_title;
    bool    m_backvisible;
    bool    m_mgrvisible;

    int     m_countRemote;
    int  m_currentIndexRemote = 0;
    int     m_contentType;

    QStringList m_priolist;
    QStringList m_optlist;
    QStringList m_gridData;
    QStringList m_menuData;
    QStringList m_numDesc;
    QStringList m_textDesc;
    QStringList m_twoValData;

    QStringList m_mvlText;
    QStringList m_mvlVisible;
    int m_mvlIndexRemote;

    QStringList m_testViewData;
    QStringList m_testBoxTitle;
    QStringList m_statusLabel;
    int m_countTestRemote = 0;

  public:

    Q_PROPERTY(QString title              READ Title              WRITE setTitle              NOTIFY TitleChanged)
    Q_PROPERTY(QString softKeyName1       READ softKeyName1       WRITE setSoftKeyName1       NOTIFY softKeyName1Changed)
    Q_PROPERTY(QString softKeyName2       READ softKeyName2       WRITE setSoftKeyName2       NOTIFY softKeyName2Changed)
    Q_PROPERTY(QString softKeyName3       READ softKeyName3       WRITE setSoftKeyName3       NOTIFY softKeyName3Changed)
    Q_PROPERTY(QString softKeyName4       READ softKeyName4       WRITE setSoftKeyName4       NOTIFY softKeyName4Changed)
    Q_PROPERTY(bool    backvisible        READ backvisible        WRITE setBackvisible        NOTIFY backvisibleChanged)
    Q_PROPERTY(bool    mgrvisible         READ mgrvisible         WRITE setMgrvisible         NOTIFY mgrvisibleChanged)

    Q_PROPERTY(int     countRemote        READ countRemote        WRITE setCountRemote        NOTIFY countRemoteChanged)
    Q_PROPERTY(int currentIndexRemote     READ currentIndexRemote WRITE setCurrentIndexRemote NOTIFY currentIndexRemoteChanged)
    Q_PROPERTY(int     contentType        READ contentType        WRITE setContentType        NOTIFY contentTypeChanged)

    Q_PROPERTY(QStringList priolist       READ priolist           WRITE setPriolist           NOTIFY priolistChanged)
    Q_PROPERTY(QStringList optlist        READ optlist            WRITE setOptlist            NOTIFY optlistChanged)
    Q_PROPERTY(QStringList gridData       READ gridData           WRITE setgridData           NOTIFY gridDataChanged)
    Q_PROPERTY(QStringList menuData       READ menuData           WRITE setmenuData           NOTIFY menuDataChanged)
    Q_PROPERTY(QStringList numDesc        READ numDesc            WRITE setnumDesc            NOTIFY numDescChanged)
    Q_PROPERTY(QStringList textDesc       READ textDesc           WRITE setTextDesc           NOTIFY textDescChanged)
    Q_PROPERTY(QStringList twoValData     READ twoValData         WRITE setTwoValData         NOTIFY twoValDataChanged)

    Q_PROPERTY(QStringList mvlText        READ mvlText            WRITE setMvlText            NOTIFY mvlTextChanged)
    Q_PROPERTY(QStringList mvlVisible     READ mvlVisible         WRITE setmvlVisible         NOTIFY mvlVisibleChanged)
    Q_PROPERTY(int     mvlIndexRemote     READ mvlIndexRemote     WRITE setMvlIndexRemote     NOTIFY mvlIndexRemoteChanged)

    Q_PROPERTY(int      countTestRemote   READ countTestRemote    WRITE setCountTestRemote    NOTIFY countTestRemoteChanged)
    Q_PROPERTY(QStringList testViewData   READ testViewData       WRITE setTestViewData       NOTIFY testViewDataChanged)
    Q_PROPERTY(QStringList testBoxTitle   READ testBoxTitle       WRITE setTestBoxTitle       NOTIFY testBoxTitleChanged)
    Q_PROPERTY(QStringList statusLabel    READ statusLabel        WRITE setStatusLabel        NOTIFY statusLabelChanged)

    explicit RemoteMirror(QObject* parent = 0);

  //**************** Q_PROPERTY Read functions **********//
    QString softKeyName1() const;
    QString softKeyName2() const;
    QString softKeyName3() const;
    QString softKeyName4() const;
    QString Title() const;
    bool    backvisible() const;
    bool    mgrvisible() const;

    int     countRemote() const;
    int  currentIndexRemote() const;
    int     contentType() const;

    QStringList priolist() const;
    QStringList optlist() const;
    QStringList gridData() const;
    QStringList menuData() const;
    QStringList numDesc() const;
    QStringList textDesc() const;
    QStringList twoValData() const;

    QStringList mvlText() const;
    QStringList mvlVisible() const;
    int mvlIndexRemote() const;

    QStringList testViewData() const;
    QStringList testBoxTitle() const;
    QStringList statusLabel() const;
    int countTestRemote() const;
  //**************** Q_PROPERTY Read functions **********//


  //*********** INVOKED functions from HTML/JS - to remotely control the ARGUS GUI from HTML application. **********//
    Q_INVOKABLE void softKey1Clicked();
    Q_INVOKABLE void softKey2Clicked();
    Q_INVOKABLE void softKey3Clicked();
    Q_INVOKABLE void softKey4Clicked();
    Q_INVOKABLE void softKeyCancelClicked();
    Q_INVOKABLE void mgrClicked();

    Q_INVOKABLE void listOptionClicked(int i);
    Q_INVOKABLE void mvlClicked(int i);
    Q_INVOKABLE void gridOptionClicked(int i);
    Q_INVOKABLE void testBoxClicked(int index);

    Q_INVOKABLE void numEditorValChanged(QString value);
    Q_INVOKABLE void textEditorValChanged(QString value);
    Q_INVOKABLE void twoValInput1Changed(QString value);
    Q_INVOKABLE void twoValInput2Changed(QString value);

    Q_INVOKABLE void saveTextEditorValue();
    Q_INVOKABLE void saveNumEditorValue();
    Q_INVOKABLE void saveTwoValData();
  //*********** INVOKED functions from HTML/JS - to remotely control the ARGUS GUI from HTML application. **********//


    /****************************************************************/
    /* Signals and slots                                            */
    /****************************************************************/

  signals:

  //********** SIGNALS from Qt to JS - to send changed ARGUS GUI Content to HTML application *********//
    void updateRemoteTriggered(int contType); // main signal to update information in HTML application

    void softKeyName1Changed(QString softKeyName1);
    void softKeyName2Changed(QString softKeyName2);
    void softKeyName3Changed(QString softKeyName3);
    void softKeyName4Changed(QString softKeyName4);
    void TitleChanged(QString title);
    void backvisibleChanged(bool backvisible);
    void mgrvisibleChanged(bool mgrvisible);

    void countRemoteChanged(int countRemote);
    void currentIndexRemoteChanged(int currentIndexRemote);
    void contentTypeChanged(int contentType);

    void priolistChanged(QStringList priolist);
    void optlistChanged (QStringList optlist);
    void gridDataChanged(QStringList gridData);
    void menuDataChanged(QStringList menuData);
    void numDescChanged (QStringList numDesc);
    void textDescChanged(QStringList textDesc);
    void twoValDataChanged(QStringList twoValData);

    void mvlTextChanged(QStringList mvlText);
    void mvlVisibleChanged(QStringList mvlVisible);
    void mvlIndexRemoteChanged(int mvlIndexRemote);

    void testViewDataChanged(QStringList testViewData);
    void countTestRemoteChanged(int countTestRemote);
    void testBoxTitleChanged(QStringList testBoxTitle);
    void statusLabelChanged(QStringList statusLabel);
  //********** SIGNALS from Qt to JS - to send changed ARGUS GUI Content to HTML application *********//

  //********** SIGNALS from Qt to QML - to send signals to QML after invoking slots from javascript *******//
    void softKey1ClickedRemote();
    void softKey2ClickedRemote();
    void softKey3ClickedRemote();
    void softKey4ClickedRemote();
    void softKeyCancelClickedRemote();
    void softKeyOkClickedRemote();
    void mgrClickedRemote();

    void listOptionClickedRemote();
    void gridOptionClickedRemote();
    void mvlClickedRemote();
    void testBoxClickedRemote();

    void numEditorRemoteValChanged();
    void saveNumEdValueRemote();
    void textEditorRemoteValChanged();
    void saveTextEdValueRemote();
    void saveTwoValDataRemote();
    void twoValInput1RemoteChanged();
    void twoValInput2RemoteChanged();
  //********** SIGNALS from Qt to QML - to send signals to QML after invoking slots from javascript *******//

  public slots:
  //**************** Q_PROPERTY WRITE functions **********//
    void setSoftKeyName1(QString softKeyName1);
    void setSoftKeyName2(QString softKeyName2);
    void setSoftKeyName3(QString softKeyName3);
    void setSoftKeyName4(QString softKeyName4);
    void setTitle(QString title);
    void setBackvisible(bool backvisible);
    void setMgrvisible (bool mgrvisible);

    void setCountRemote(int countRemote);
    void setCurrentIndexRemote(int currentIndexRemote);
    void setContentType(int contentType);

    void setPriolist(QStringList priolist);
    void setOptlist (QStringList optlist);
    void setgridData(QStringList gridData);
    void setmenuData(QStringList menuData);
    void setnumDesc (QStringList numDesc);
    void setTextDesc(QStringList textDesc);
    void setTwoValData(QStringList twoValData);

    void setMvlText(QStringList mvlText);
    void setmvlVisible(QStringList mvlVisible);
    void setMvlIndexRemote(int mvlIndexRemote);

    void setTestViewData(QStringList testViewData);
    void setCountTestRemote(int countTestRemote);
    void setTestBoxTitle(QStringList testBoxTitle);
    void setStatusLabel(QStringList statusLabel);
  //**************** Q_PROPERTY WRITE functions **********//
};

#endif // REMOTEMIRROR_H
