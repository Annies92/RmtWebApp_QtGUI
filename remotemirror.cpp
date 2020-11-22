/********************************************************************/
/*                                                                  */
/*           source remotemirror.cpp                                */
/*                                                                  */
/* Date:     01.08.19                                               */
/* Author:   sivaram, intec GmbH Luedenscheid                       */
/*                                                                  */
/********************************************************************/
#include "remotemirror.h"
#include "qdebug.h"

/**
 * Constructor of class RemoteMirror
 * @param parent : parent of this class
 */
RemoteMirror::RemoteMirror(QObject* parent) : QObject(parent)
{
}

QString RemoteMirror::softKeyName1() const
{
    return m_softKeyName1;
}

QString RemoteMirror::softKeyName2() const
{
    return m_softKeyName2;
}

QString RemoteMirror::softKeyName3() const
{
    return m_softKeyName3;
}

QString RemoteMirror::softKeyName4() const
{
    return m_softKeyName4;
}

QString RemoteMirror::Title() const
{
    return m_title;
}

void RemoteMirror::softKey1Clicked()
{
   emit softKey1ClickedRemote();
}

void RemoteMirror::softKey2Clicked()
{
   emit softKey2ClickedRemote();
}

void RemoteMirror::softKey3Clicked()
{
   emit softKey3ClickedRemote();
}

void RemoteMirror::softKey4Clicked()
{
   emit softKey4ClickedRemote();
}

void RemoteMirror::softKeyCancelClicked()
{
   emit softKeyCancelClickedRemote();
}

void RemoteMirror::mgrClicked()
{
   emit mgrClickedRemote();
}

void RemoteMirror::listOptionClicked(int i)
{
  if( m_currentIndexRemote != i)
  {
    m_currentIndexRemote = i;
    emit listOptionClickedRemote();
    //qDebug()<<"clicked";
  }
  else
  {
    emit softKeyOkClickedRemote();
    //qDebug()<<"clicked....OK";
  }
  emit currentIndexRemoteChanged(i);
}

void RemoteMirror::mvlClicked(int i)
{
  m_mvlIndexRemote = i;
  emit mvlClickedRemote();
  emit mvlIndexRemoteChanged(i);
}

void RemoteMirror::gridOptionClicked(int i)
{
  m_currentIndexRemote = i;
  emit gridOptionClickedRemote();
  emit currentIndexRemoteChanged(i);
}

void RemoteMirror::numEditorValChanged(QString value)
{
  m_numDesc[0] = value;
  emit numEditorRemoteValChanged();
}

void RemoteMirror::textEditorValChanged(QString value)
{
  m_textDesc[0] = value;
  emit textEditorRemoteValChanged();
}

void RemoteMirror::twoValInput1Changed(QString value)
{
  m_twoValData[2] = value;
  emit twoValInput1RemoteChanged();
}

void RemoteMirror::twoValInput2Changed(QString value)
{
  m_twoValData[4] = value;
  emit twoValInput2RemoteChanged();
}

void RemoteMirror::saveTextEditorValue()
{
  emit saveTextEdValueRemote();
}

void RemoteMirror::saveNumEditorValue()
{
  emit saveNumEdValueRemote();
}

void RemoteMirror::saveTwoValData()
{
  emit saveTwoValDataRemote();
}

void RemoteMirror::testBoxClicked(int index)
{
  m_currentIndexRemote = index;
  emit testBoxClickedRemote();
}

QStringList RemoteMirror::priolist() const
{
  return m_priolist;
}

QStringList RemoteMirror::optlist() const
{
  return m_optlist;
}

QStringList RemoteMirror::gridData() const
{
  return m_gridData;
}

QStringList RemoteMirror::menuData() const
{
  return m_menuData;
}

QStringList RemoteMirror::numDesc() const
{
  return m_numDesc;
}

QStringList RemoteMirror::textDesc() const
{
  return m_textDesc;
}

QStringList RemoteMirror::twoValData() const
{
  return m_twoValData;
}

QStringList RemoteMirror::mvlText() const
{
  return m_mvlText;
}

QStringList RemoteMirror::mvlVisible() const
{
  return m_mvlVisible;
}

QStringList RemoteMirror::testViewData() const
{
  return m_testViewData;
}

QStringList RemoteMirror::testBoxTitle() const
{
  return m_testBoxTitle;
}

QStringList RemoteMirror::statusLabel() const
{
  return m_statusLabel;
}

int RemoteMirror::mvlIndexRemote() const
{
  return m_mvlIndexRemote;
}

int RemoteMirror::countTestRemote() const
{
  return m_countTestRemote;
}

bool RemoteMirror::backvisible() const
{
  return m_backvisible;
}

bool RemoteMirror::mgrvisible() const
{
    return m_mgrvisible;
}

int RemoteMirror::countRemote() const
{
    return m_countRemote;
}

int RemoteMirror::currentIndexRemote() const
{
    return m_currentIndexRemote;
}

int RemoteMirror::contentType() const
{
    return m_contentType;
}

void RemoteMirror::setSoftKeyName1(QString softKeyName1)
{
    if (m_softKeyName1 == softKeyName1)
        return;

    m_softKeyName1 = softKeyName1;
    emit softKeyName1Changed(m_softKeyName1);
}

void RemoteMirror::setSoftKeyName2(QString softKeyName2)
{
    if (m_softKeyName2 == softKeyName2)
        return;

    m_softKeyName2 = softKeyName2;
    emit softKeyName2Changed(m_softKeyName2);
}

void RemoteMirror::setSoftKeyName3(QString softKeyName3)
{
    if (m_softKeyName3 == softKeyName3)
        return;

    m_softKeyName3 = softKeyName3;
    emit softKeyName3Changed(m_softKeyName3);
}

void RemoteMirror::setSoftKeyName4(QString softKeyName4)
{
    if (m_softKeyName4 == softKeyName4)
        return;

    m_softKeyName4 = softKeyName4;
    emit softKeyName4Changed(m_softKeyName4);
}

void RemoteMirror::setTitle(QString title)
{
    if (m_title == title)
        return;

    m_title = title;
    emit TitleChanged(m_title);
}

void RemoteMirror::setBackvisible(bool backvisible)
{
    if (m_backvisible == backvisible)
        return;

    m_backvisible = backvisible;
    emit backvisibleChanged(m_backvisible);
}

void RemoteMirror::setMgrvisible(bool mgrvisible)
{
    if (m_mgrvisible == mgrvisible)
        return;

    m_mgrvisible = mgrvisible;
    emit mgrvisibleChanged(m_mgrvisible);
}

void RemoteMirror::setCountRemote(int countRemote)
{
    if (m_countRemote == countRemote)
        return;

    m_countRemote = countRemote;
    emit countRemoteChanged(m_countRemote);
}

void RemoteMirror::setCurrentIndexRemote(int currentIndexRemote)
{
    if (m_currentIndexRemote == currentIndexRemote || currentIndexRemote < 0 )
    {
      //m_currentIndexRemote = 0;
      return;
    }
    //else
    //{
      m_currentIndexRemote = currentIndexRemote;
      //qDebug()<< "index in mirror :" << m_currentIndexRemote;
      emit currentIndexRemoteChanged(m_currentIndexRemote);
    //}
}


void RemoteMirror::setContentType(int contentType)
{
    if (m_contentType == contentType)
        return;

    m_contentType = contentType;
    emit contentTypeChanged(m_contentType);

}

void RemoteMirror::setPriolist(QStringList priolist)
{
  if (m_priolist == priolist)
    return;

  m_priolist = priolist;
  emit priolistChanged(m_priolist);
}

void RemoteMirror::setOptlist(QStringList optlist)
{
  if (m_optlist == optlist)
    return;

  m_optlist = optlist;
  emit optlistChanged(m_optlist);
}

void RemoteMirror::setgridData(QStringList gridData)
{
  if (m_gridData == gridData)
    return;

  m_gridData = gridData;
  emit gridDataChanged(m_gridData);
}

void RemoteMirror::setmenuData(QStringList menuData)
{
  if (m_menuData == menuData)
    return;

  m_menuData = menuData;
  emit menuDataChanged(m_menuData);
}

void RemoteMirror::setnumDesc(QStringList numDesc)
{
  if (m_numDesc == numDesc)
    return;

  m_numDesc = numDesc;
  emit numDescChanged(m_numDesc);
}

void RemoteMirror::setTextDesc(QStringList textDesc)
{
  if (m_textDesc == textDesc)
    return;

  m_textDesc = textDesc;
  emit textDescChanged(m_textDesc);
}

void RemoteMirror::setTwoValData(QStringList twoValData)
{
  if (m_twoValData == twoValData)
    return;
  m_twoValData = twoValData;
  emit twoValDataChanged(m_twoValData);
}

void RemoteMirror::setMvlText(QStringList mvlText)
{
  if (m_mvlText == mvlText)
    return;

  m_mvlText = mvlText;
  emit mvlTextChanged(m_mvlText);
}

void RemoteMirror::setmvlVisible(QStringList mvlVisible)
{
  if (m_mvlVisible == mvlVisible)
    return;

  m_mvlVisible = mvlVisible;
  emit mvlVisibleChanged(m_mvlVisible);
}

void RemoteMirror::setTestViewData(QStringList testViewData)
{
  if (m_testViewData == testViewData)
    return;

  m_testViewData = testViewData;
  emit testViewDataChanged(m_testViewData);
}

void RemoteMirror::setCountTestRemote(int countTestRemote)
{
  if (m_countTestRemote == countTestRemote)
    return;

  m_countTestRemote = countTestRemote;
  emit countTestRemoteChanged(m_countTestRemote);
}

void RemoteMirror::setTestBoxTitle(QStringList testBoxTitle)
{
  if (m_testBoxTitle == testBoxTitle)
    return;

  m_testBoxTitle = testBoxTitle;
  emit testBoxTitleChanged(m_testBoxTitle);
}

void RemoteMirror::setStatusLabel(QStringList statusLabel)
{
  if (m_statusLabel == statusLabel)
    return;

  m_statusLabel = statusLabel;
  emit statusLabelChanged(m_statusLabel);
}

void RemoteMirror::setMvlIndexRemote(int mvlIndexRemote)
{
  if (m_mvlIndexRemote == mvlIndexRemote)
    return;

  m_mvlIndexRemote = mvlIndexRemote;
  emit mvlIndexRemoteChanged(m_mvlIndexRemote);
}





