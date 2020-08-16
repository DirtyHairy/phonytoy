#ifndef AUDIO_TASK_HXX
#define AUDIO_TASK_HXX

#include "config.h"

namespace AudioTask {

void initialize();

void start();

void togglePause();
void volumeUp();
void volumeDown();
void previous();
void next();
void rewind();

}  // namespace AudioTask

#endif  // AUDIO_TASK_HXX
