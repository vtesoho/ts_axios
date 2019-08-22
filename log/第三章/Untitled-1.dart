

 //优先抢
                  if (text['type'] == 1) {
                     if (selectedTicketId != null && foodIdSelectTicketData['available_count'] > 0) {
                    CustomNotice().show(child: affirmOrder(()=>priorAction()), shadeDismiss: false);
                    // priorAction();
                  }
