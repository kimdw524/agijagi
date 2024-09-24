package com.password926.agijagi.diary.controller;

import com.password926.agijagi.auth.controller.dto.LoginMember;
import com.password926.agijagi.diary.controller.dto.CreateDiaryRequest;
import com.password926.agijagi.diary.controller.dto.UpdateDiaryRequest;
import com.password926.agijagi.diary.entity.Diary;
import com.password926.agijagi.diary.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/diary")
@RestController
public class DiaryController {

    private DiaryService diaryService;

    @PostMapping
    public ResponseEntity<Void> createDiary(
            LoginMember member,
            @RequestBody CreateDiaryRequest createDiaryRequest
    ) {
        diaryService.createDiary(member.getId(),createDiaryRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Diary>> getAllDiary(
            LoginMember member,
            @RequestParam long childId
    ) {
        return ResponseEntity.ok().body(diaryService.getAllDiary(member.getId(), childId));
    }

    @GetMapping("/{diaryId}")
    public ResponseEntity<Diary> getDiary(
            LoginMember member,
            @PathVariable long diaryId
    ) {
        return ResponseEntity.ok().body(diaryService.getDiary(member.getId(), diaryId));
    }

    @PutMapping("/{diaryId}")
    public ResponseEntity<Void> updateDiary(
            LoginMember member,
            @PathVariable long diaryId,
            @RequestBody UpdateDiaryRequest updateDiaryRequest
    ) {
        diaryService.updateDiary(diaryId, updateDiaryRequest);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{diaryId}")
    public ResponseEntity<Void> deleteDiary(
            LoginMember member,
            @PathVariable long diaryId
    ) {
        diaryService.deleteDiary(diaryId);
        return ResponseEntity.ok().build();
    }

}
